*Reuse Plan*

In this project, We chose Vue.js as the front-end framework, Springboot as the back-end framework, and MySQL as the database.

**Reuse Approach**

| **User** | **Component** | **Develop Approach** | **Technology** |
| --- | --- | --- | --- |
|     | Login | Reuse generic | Built on MySQL |
|     | UI  | Reuse with modification | Modify the front-end style according to the function |
|     | Main | Develop |     |
|     | Server | Reuse | Existing server Apache Tomcat |
| Teacher | ViewStudents | Develop | Vue.js |
|     | EditStudents | Develop |     |
| Subiect Coordinator | ViewFeedback | Develop |     |
|     | ReplyStudents | Develop |     |
|     | GiveFeedback | Develop |     |
| Leeturer and Mentor | View | Develop |     |
|     | ReplyCoordinator | Reuse with modification | Modify from other Reply functions |
|     | CreateAssessment | Develop |     |
| Students | ViewModuleScores | Develop |     |
|     | ViewAverageScores | Reuse |     |
|     | GiveFeedback | Reuse |     |
| Admin | ViewAllScores | Reuse |     |
