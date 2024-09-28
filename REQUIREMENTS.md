# Requirements

## Why Define Requirements?
[Purpose]
[Scope]

## Basic User Stories
As a student attendee, I'd like to:
| Task | Reason |
|---|---|
| View upcoming events | To help me decide which are relevant for me to attend |
| RSVP to events and export event to my personal calendar | So that I don't forget to attend |
| Mark myself present at events | To ensure that my headcount is considered for club organizational purposes |

As an company representative, I'd like to:
| Task | Reason |
|---|---|
| Review logistical information (primary contact, location and room, date/time, etc) | To confirm that I know when and where I should be there |
| Export information to my personal calendar | So that I don't forget to attend |

As an administrator, I'd like to:
| Task | Reason |
|---|---|
| Create events | So that guests (students, company representatives) can RSVP and review |

## Functional Requirements
### Login
1. A user can login as either a student or a company representative (rep) using their email.
    - An admin user is a student with elevated privileges.
### Events
2. Upon login, students can view the list of all upcoming events.
Reps can only see upcoming events where their company will attend.
Archived past events are also viewable, but the user cannot interact with them.
3. Upon selecting an event, a user (both students and reps) can view the title, time/date, location/room, and the primary contact.
All events will have an RSVP for students.
If an event has capped attendance, then the options for RSVP are "yes," "no," and "waitlist."
If an event does not have capped attendance, then the options for RSVP are "yes," "no," and "maybe."
4. Upon selecting an event, reps can view how many students have RSVP'd "yes," "waitlist," and "maybe" to the event.
5. Upon selecting an event, a student can RSVP to the event (yes, no, maybe).
- After RSVP-ing, they can export the event to calendar if they selected "yes" or "maybe."
Modifications on the RSVP is allowed.
6. Upon selecting an event, a student can mark themselves as "present" using a passcode, if it is between thirty minutes before and after it happens.

### Profile
1. A rep can perform the following actions on their profile: view past company events, view upcoming company events, delete their data.
2. A student can perform the following actions on their profile: view past attended events (marked as present), view their RSVP'd future events, send an anonymous email to admin.

### Admin
1. Admins can view their personal events and profile, the same that regular students can.
2. Admin can create, edit, archive, and delete events.
3. Admin can manually edit attendance.
4. Admin can send out reminder emails and post-event surveys to attendees.

## Non-functional requirements
1. Performance
2. Usability
3. Accessibility
4. Security
5. Privacy
6. Reliability

## Constraints
1. Back end implemented in Golang.
2. Front end implemented with NextJS/React (TypeScript).
3. Database is in PostgreSQL.
4. CI/CD process implemented with Jenkins.
5. Deployment will invole Docker.

## Appendix: Abbrevations and Glossary
- rep = Company representative