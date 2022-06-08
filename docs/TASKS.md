# Astro bookings tasks

> A website for space travel reservations.

## 0. Application, module, and root component.

- [x] Know the structure of the application
- [x] Run the application
- [x] Clean root component
- [x] Install a CSS framework (_picocss_)
- [x] Root layout (header-main-footer)

## 1. Templates

- [x] Show agencies counter
- [x] List all
- [x] Show agency details
- [x] Active agencies in bold, pending agencies in italic
- [x] Show an icon to indicate different operation ranges
- [x] Show a button for reloading the list
- [x] Attach the click event of the button to a public method
- [x] Show a message when reloading the list

> Student tasks:

- [x] Show trips counter
- [x] List all trips
- [x] Show trip details
- [x] Confirmed trips in green, waiting trips in orange
- [x] Show an icon to indicate the trip kind

## 2. Modules

- [x] Create a Core module
- [x] Move the header node to the Core module
- [x] Move the title node to a new private component
- [x] Use the Title component in the header
- [x] Create a Home module
- [x] Move the main node to the Home component

> Student tasks:

- [x] Move the footer node to the Core module
- [x] Use the Title component in the footer
- [x] Create a Shared module
- [x] Move the reloading content to a component on the Shared module

## 3. Routes

- [x] Route for home page (/) bind to HomeComponent
- [x] Route for an about page (`/about`) bind lazy to AboutModule
- [x] Route for a register page (`auth/register`) bind lazy to RegisterModule
- [x] Route for an agencies page (`/agencies`) bind lazy to AgenciesModule
- [x] Use a shared agencies list component on the agencies page
- [x] Route for an agency page (`/agencies/agency/:id`) bind lazy to AgencyModule

> Student tasks:

- [x] Route for an about page (`/contact`) bind lazy to ContactModule
- [x] Route for a login page (`auth/login`) bind lazy to LoginModule
- [x] Route for a trips page (`/trips`) bind lazy to TripsModule
- [x] Use a shared trips list component on the trips page
- [x] Route for a trip page (`/trips/trip/:id`) bind lazy to TripModule

## 4. Forms

- [x] Create a form for the contact page
- [x] Create a form for the register page
- [x] Create a form for a new Agency

> Student tasks:

- [x] Create a form for the login page
- [x] Create a form for a new Trip

## 5. Services

- [x] Create a service to validate forms
- [x] Create a service to manage form messages
- [x] Create a class as a base to form components
- [x] Create a service for common utilities
- [x] Create a service to manage agencies API
- [x] Create an interface for an agency object
- [x] Create an interface for id name pairs

> Student tasks:

- [x] Use services on each form
- [x] Create a service for common utilities (getDashId)
- [x] Create an interface for a trip object
- [x] Create a service to manage trips API

## 6. Containers

- [x] Use container/presenters pattern for AgenciesPage and AgenciesList
- [x] Use container/presenters pattern for NewAgencyPage and NewAgencyForm
