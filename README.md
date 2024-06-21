# Sistema Integrado de Planificación Operativa (SIPO)

## Overview

SIPO is a digital platform developed for Encora Inc. to enhance the allocation and management of clients, projects, vacancies, and employees. It aims to improve resource visibility, optimize time and effort, and integrate demand planning and operational capacity in an intuitive and scalable interface.

## Problem Addressed

1. **Lack of Planning and Visibility**: Hinders efficient resource allocation and project planning.
2. **Inefficient Recruitment and Assignment**: Delays in identifying and recruiting necessary personnel.
3. **Increased Costs Due to Unassigned Personnel**: Poor organization leads to unnecessary layoffs.
4. **Absence of a Vacancy and Capacity Management System**: Limited visibility of vacancies and skills complicates staff placement.
5. **Extended Delivery Times**: Negatively impacts client satisfaction and competitiveness.

## Solution

SIPO provides an innovative platform that transforms the organization and administration of capacities within Encora Inc., enhancing project and client creation, tracking personnel availability, accelerating project completion, and reducing operational costs.

## Features

1. **User Authentication and Authorization**: Secure login using Microsoft credentials.
2. **Client and Project Management**: Create, edit, and delete clients and projects.
3. **Job Position Visualization**: Display job positions associated with projects.
4. **Project Status Visualization**: Show project completion percentage.
5. **Vacancy Visualization**: List vacancies associated with job positions.
6. **Candidate Management**: List, modify, and cancel candidate profiles.
7. **Assignment and Status Update of Candidates**: Assign candidates to job positions and update their status.
8. **Search and Filter Functionality**: Search and filter clients, projects, job positions, candidates, and vacancies.
9. **Report Generation and Analysis**: Provide dashboards with user-specific information.

## Technology Stack

1. **Frontend**: React with Zustand for state management, Tailwind CSS for styling, TypeScript for type safety.
2. **Backend**: Node.js with ExpressJS and Sequelize ORM.
3. **Database**: PostgreSQL.
4. **Deployment**: Vercel.
5. **Tools**: Postman for API testing, Figma for design.

## User Profiles

1. **Account Manager**: Manages clients, contracts, and projects.
2. **Resource Manager**: Manages human resources, prepares candidates, and generates resource availability reports.
3. **Staffer**: Manages operational capacity, assigns candidates to vacancies, and provides strategic analysis.
4. **Administrator**: Creates new users and views user-specific data.

## Team

- Aarón Ernesto Oviedo Sánchez
- Camila Guadalupe Rodríguez Martínez
- Cristian Gael Peralta Tarazón
- Daniela Gallardo Colín
- Héctor Alán Gutiérrez Gálvez
- Jesús Raúl Medina Verdugo
- Jorge Iván Coronado Villegas
- José Víctor Symonds Rivera
- Leonardo Reyes Lugo
- Mariana Alejandra García Gómez
- Uma Elena Umaña Kossio

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/SIPO-E2/SIPO-Frontend.git
   ```
2. **Navigate to the Project Directory**:

   ```sh
   cd SIPO-Frontend
   ```

3. **Install Dependencies**:

   ```sh
   npm install
   ```

4. **Run the Application**:
   ```sh
   npm start
   ```

## Usage

1. **Login**: Use your Microsoft credentials to log in to the platform.
2. **Manage Clients and Projects**: Create, edit, and delete clients and projects as needed.
3. **Assign Candidates**: Assign candidates to job positions and update their status.
4. **Generate Reports**: Use the dashboard to generate reports and analyze data.

## Backend Repository

For the backend repository, please visit [SIPO-Backend](https://github.com/HectorGtz27/SIPO-Backend).
