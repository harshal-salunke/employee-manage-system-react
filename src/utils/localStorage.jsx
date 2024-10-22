const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Prepare Project Report",
          "taskDescription": "Complete the quarterly project report.",
          "taskDate": "2024-10-20",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Client Records",
          "taskDescription": "Ensure all client details are up to date.",
          "taskDate": "2024-10-18",
          "category": "Data Entry"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Schedule Team Meeting",
          "taskDescription": "Coordinate with the team for a status update meeting.",
          "taskDate": "2024-10-22",
          "category": "Coordination"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Budget Forecast",
          "taskDescription": "Work on the annual budget forecast for 2025.",
          "taskDate": "2024-10-15",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Attend Training",
          "taskDescription": "Complete the mandatory cybersecurity training.",
          "taskDate": "2024-10-17",
          "category": "Training"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Submit Timesheet",
          "taskDescription": "Upload the timesheet for the past two weeks.",
          "taskDate": "2024-10-19",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Client Meeting Preparation",
          "taskDescription": "Prepare for the client meeting presentation.",
          "taskDate": "2024-10-21",
          "category": "Client Relations"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Inventory",
          "taskDescription": "Perform the monthly inventory update.",
          "taskDate": "2024-10-10",
          "category": "Inventory"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Prepare Marketing Campaign",
          "taskDescription": "Work on the new email marketing campaign.",
          "taskDate": "2024-10-12",
          "category": "Marketing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Submit Feedback",
          "taskDescription": "Provide feedback for the recent project.",
          "taskDate": "2024-10-08",
          "category": "Internal"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Organize Workshop",
          "taskDescription": "Set up the equipment and materials for the workshop.",
          "taskDate": "2024-10-14",
          "category": "Training"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Review Code",
          "taskDescription": "Perform a code review for the latest feature.",
          "taskDate": "2024-10-21",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team Collaboration",
          "taskDescription": "Work with the team on the new project roadmap.",
          "taskDate": "2024-10-22",
          "category": "Planning"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskTitle": "Update Software",
          "taskDescription": "Update software on all workstations.",
          "taskDate": "2024-10-15",
          "category": "IT"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Conduct Interviews",
          "taskDescription": "Interview candidates for the open positions.",
          "taskDate": "2024-10-13",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Project Planning",
          "taskDescription": "Create a detailed plan for the upcoming project.",
          "taskDate": "2024-10-11",
          "category": "Planning"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Presentation",
          "taskDescription": "Prepare a presentation for the stakeholders meeting.",
          "taskDate": "2024-10-12",
          "category": "Client Relations"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Develop Feature",
          "taskDescription": "Work on the new feature for the product.",
          "taskDate": "2024-10-16",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Test Software",
          "taskDescription": "Test the latest release for bugs and issues.",
          "taskDate": "2024-10-18",
          "category": "QA"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees, admin)
}