# TaskFlow — Kanban Board with Workload Balancing

A full-stack Kanban Task Management application built with **React, TypeScript, Tailwind CSS, Node.js + Express, and PostgreSQL**, featuring drag-and-drop workflow management and a real-time **Workload Balancing** engine.

---

## 🚀 Implemented Features

### Kanban Board

* Exactly three columns: **To-Do**, **In Progress**, and **Done**.
* Drag-and-drop task management using `@dnd-kit/core`.
* Optimistic UI updates with backend persistence through `PUT /api/tasks/:id`.
* Dynamic task counters for each column.
* Create, edit, and delete tasks with instant board updates.

### Workload Balancing — "Vibe Check"

* Dynamically calculates active tasks where `status = 'IN_PROGRESS'` for each team member.
* Strict workload threshold of **> 5 tasks**.
* Engineers with **6+ in-progress tasks** display:

  * Pulsing red avatar using `animate-workload-glow`.
  * Alert warning badge.
  * Animated red capacity meter.
* Engineers with exactly **5 in-progress tasks** remain in the normal state to demonstrate the boundary condition.

### Task Management

* Task creation, editing, and deletion.
* Priority levels:

  * **High** — Red accent
  * **Medium** — Amber accent
  * **Low** — Green accent
* Target due dates with overdue indicators.
* Task assignment to team members.

### Priority Filtering

* Filter tasks across the entire board by:

  * **All**
  * **Low**
  * **Medium**
  * **High**
* Column counters update dynamically according to the selected filter.

### Team Management

* Add new team members with **name and email validation**.
* Display team members in the sidebar.
* Filter tasks by clicking a team member's avatar.

### PostgreSQL Data Storage

* Relational database structure using PostgreSQL.
* Tables for:

  * `projects`
  * `users`
  * `tasks`
* Foreign-key relationships between related entities.
* Support for embedded PostgreSQL through `@electric-sql/pglite`.
* Support for external PostgreSQL databases through `DATABASE_URL` and `pg`.

### REST API

Implemented REST endpoints for task, user, project, and dataset management:

| Method   | Endpoint          | Purpose                               |
| -------- | ----------------- | ------------------------------------- |
| `GET`    | `/api/tasks`      | Fetch all tasks with user information |
| `POST`   | `/api/tasks`      | Create a new task                     |
| `PUT`    | `/api/tasks/:id`  | Update task details or status         |
| `DELETE` | `/api/tasks/:id`  | Delete a task                         |
| `GET`    | `/api/users`      | Fetch all team members                |
| `POST`   | `/api/users`      | Add a new team member                 |
| `GET`    | `/api/projects`   | Fetch project details                 |
| `POST`   | `/api/reset-seed` | Reset the demo dataset                |

---

## 🛠️ Tech Stack

**Frontend**

* React 18
* TypeScript
* Tailwind CSS
* Vite
* `@dnd-kit/core`
* Lucide React

**Backend**

* Node.js
* Express
* TypeScript
* `tsx`

**Database**

* PostgreSQL
* `@electric-sql/pglite`
* `pg`
* Relational schema with foreign keys
