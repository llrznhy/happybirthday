# Reuse Plan

In this project, we choose React as the front-end framework, Springboot as the back-end framework, and MySQL as the database.

• React can help develop complex front-end interfaces rapidly and promotes code reuse and maintainability.

• Springboot can simplify the development of enterprise-level Java applications.

• MySQL offers excellent query performance and data security and integrates smoothly with Springboot.

## Reuse Approach

| **User** | **Component** | **Develop Approach** | **Technology** |
| --- | --- | --- | --- |
| System | Login | Reuse generic | Built on MySQL |
|     | UI  | Reuse with modification | Modify the front-end style according to the function |
|     | Main | Develop | Develop through front-end and back-end |
|     | Server | Reuse | Existing server Apache Tomcat |
|     | Database | Reuse | MySQL |
|     | Authentication service | Reuse | JSON Web Tokens |
| Teacher | View student information | Develop | With the front-end framework react |
| Subiect Coordinator | View feedback | Reuse with modification | Reuse with view student information component |
|     | View disagreement | Reuse with modification | Reuse and modify previous components |
|     | Give feedback | Develop | Develop with development tools |
|     | Add/Edit module information | Develop | Develop with development tools |
|     | Edit Evaluation<br><br>Criteria | Develop | Develop with specific function |
| Lecturer and Tutor | View student information/module/<br><br>feedback | Reuse | Reuse and modify previous components |
|     | Give grades | Develop | React and Springboot |
|     | Check module information | Develop | Develop with development tools |
| Students | View own information/grades/<br><br>modules | Reuse | Reuse previous components |
|     | GiveFeedback | Reuse | Reuse previous components |
| Admin | Add students | Develop | With front-end and back-end |
