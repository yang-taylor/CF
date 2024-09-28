package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/mail"
	"os"
	"regexp"
	"slices"
)

/**							**/
/** DATA TYPE DEFINITIONS   **/
/**							**/
type employee struct {
	Email      string `json:"email"`
	First_Name string `json:"first_name"`
	Last_Name  string `json:"last_name"`
	Company    string `json:"company"`
	Job_Title  string `json:"job_title"`
}

type company struct {
	Name                    string `json:"name"`
	Industry                string `json:"industry"`
	Website_URL             string `json:"website_url"`
	Is_Hiring_Internships   bool   `json:"is_hiring_internships"`
	Is_Hiring_FT            bool   `json:"is_hiring_fulltime"`
	Is_Hiring_International bool   `json:"is_hiring_international"`
}

type student struct {
	// Should be NCSU email address
	Email string `json:"email"`
	// Student's preferred name, can be any combination of
	// first name, last name, or nickname
	Preferred_Name string `json:"pref_name"`
	// True or false, depending on membership status
	Is_WiCS_Member bool `json:"is_wics_member"`
	// 1, 2, 3, 4 --> Undergraduate; 5, 6 --> Master's;
	// 7, 8 --> PhD; 0 --> High school / dual-enrolled
	Year int `json:"year"`
}

/**							**/
/** DUMMY DATA              **/
/**							**/
var companies = []string{
	"SAS", "Parker Lord",
}

var reps = []employee{
	{Email: "christie.Eades@sas.com", First_Name: "Christie", Last_Name: "Eades", Company: "SAS", Job_Title: "Recruiter"},
	{Email: "kevin.styers@parker.com", First_Name: "Kevin", Last_Name: "Styers", Company: "Parker Lord", Job_Title: "IT Business Operations Manager"},
}

var students = []student{
	{Email: "tyang27@ncsu.edu", Preferred_Name: "Taylor", Is_WiCS_Member: true, Year: 4},
	{Email: "aoabduls@ncsu.edu", Preferred_Name: "Amina", Is_WiCS_Member: true, Year: 3},
}

/**							**/
/** API DEFINITIONS         **/
/**							**/
func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got / request\n")
	io.WriteString(w, "This is my website!\n")
}

func getHello(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hello, HTTP!\n")
}

func getCompanies(w http.ResponseWriter, r *http.Request) {
	companies_json, _ := json.Marshal(companies)
	fmt.Fprintf(w, string(companies_json))
	fmt.Printf("got /companies request\n")
}

func getEmployeesByCompany(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("got /company/employee request\n")
	http.Error(w, "Not yet implemented", 500)
}

func getEmployees(w http.ResponseWriter, r *http.Request) {
	employee_json, _ := json.Marshal(reps)
	fmt.Fprintf(w, string(employee_json))
	fmt.Printf("got /employees request\n")
}

func getEmployeesByEmail(w http.ResponseWriter, r *http.Request) {
	full_url_path := r.URL.Path

	// Removing "/employees" part of URL
	url_regex, _ := regexp.Compile("/employees/")
	id := url_regex.ReplaceAllString(full_url_path, "")

	// Retrieve full email address
	//email_regex, _ := regexp.Compile("/employees/^(([A-Za-z0-9]+)@([A-Za-z0-9]+]).com)")
	//email := email_regex.ReplaceAllString(full_url_path, "")
	email, _ := mail.ParseAddress(id)

	// Find employee from list
	idx := slices.IndexFunc(reps, func(emp employee) bool { return emp.Email == email.Address })
	if idx == -1 {
		http.Error(w, "Employee not found", 404)
	} else {
		// Return data
		employee_json, _ := json.Marshal(reps[idx])
		fmt.Fprintf(w, string(employee_json))
	}
}

func getStudents(w http.ResponseWriter, r *http.Request) {
	student_json, _ := json.Marshal(students)
	fmt.Fprintf(w, string(student_json))
	fmt.Printf("got /students request\n")
}

func getStudentsByUnityID(w http.ResponseWriter, r *http.Request) {
	full_url_path := r.URL.Path

	// Removing "/students" part of URL
	url_regex, _ := regexp.Compile("/students/")
	id := url_regex.ReplaceAllString(full_url_path, "")

	// Convert unity ID to full email address
	unity_id_regex, _ := regexp.Compile("([A-Za-z0-9]+)")
	student_email := unity_id_regex.ReplaceAllString(id, "$1@ncsu.edu")

	// Find student from list
	idx := slices.IndexFunc(students, func(s student) bool { return s.Email == student_email })
	if idx == -1 {
		http.Error(w, "Student not found", 404)
	} else {
		// Return data
		student_json, _ := json.Marshal(students[idx])
		fmt.Fprintf(w, string(student_json))
	}
}

/**							**/
/** MAIN                    **/
/**							**/
func main() {
	http.HandleFunc("/", getRoot)
	http.HandleFunc("/hello", getHello)

	http.HandleFunc("/students", getStudents)
	http.HandleFunc("/students/{id}", getStudentsByUnityID)

	http.HandleFunc("/employees", getEmployees)
	http.HandleFunc("/employees/{email}", getEmployeesByEmail)

	http.HandleFunc("/companies", getCompanies)
	http.HandleFunc("/companies/{company}/employees", getEmployeesByCompany)

	err := http.ListenAndServe(":3333", nil)

	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}
