# Appointments App

![Appointments App](https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif)

## Overview

The **Appointments App** allows you to manage appointments efficiently. You can add, star, and filter appointments with ease.

## Functionality

### Add Appointments

- Initially, the list of appointments is empty, and the title input and date input are blank.
- To add an appointment:
  - Enter a non-empty title.
  - Select a date using the date picker.
  - Click the "Add" button.
- The appointment will be added to the list, and the input fields will be cleared.

### Star Appointments

- To mark an appointment as "starred," click the star icon next to it.
- The appointment will be highlighted as starred.

### Filter Appointments

- You can filter appointments based on their "star" status:
  - Click the "Starred" filter to view only starred appointments.
  - Click it again to show all appointments.

## Components Structure

The Appointments App consists of the following components:

- `Appointments` (Responsible for managing appointments)
- `AppointmentItem` (Displays individual appointment items)

## Important Note

- For date formatting, the app uses the format string `dd MMMM yyyy, EEEE`.
- The star button in each appointment has the data-testid "star".
- The star image in each appointment has the alt text "star".
