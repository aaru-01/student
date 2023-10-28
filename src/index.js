import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./views/Home/Home"
import AddStudents from "./views/AddStudents/AddStudents"
import UpdateStudents from "./views/UpdateStudents/UpdateStudents"
import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import StudentDetail from './views/StudentDetail/StudentDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/addstudents",
    element: <AddStudents />
  },
  {
    path: "/updatestudents/:id",
    element: <UpdateStudents />
  },
  {
    path: "/student-detail/:id",
    element: <StudentDetail />
  }
])
root.render(
  <RouterProvider router={router} />
);


