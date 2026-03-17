# Todo App 📝

A simple **React-based to-do list application** to manage and track tasks with priorities, descriptions, and due dates. Built with **React** and **Tailwind CSS** for responsive and modern UI.  

---

## Features

- Add tasks with **title**, **description**, **priority**, and **due date**  
- Mark tasks as **completed**  
- Delete tasks  
- **Priority badges**: low, medium, and high  
- **Responsive design** with scrollable task list  
- **Enter key** to quickly add tasks  

---

## Screenshots

![App Screenshot](path-to-screenshot.png)  

---

## Installation

```bash
# Clone the repository
git clone https://github.com/nooraphussain/todo-App.git

# Navigate into the project folder
cd todo-App

# Install dependencies
npm install

# Start the development server
npm start
```



## Usage
- Type a task in the input box and press Enter or click Add
- Set priority and due date when creating a task (if implemented)
- Click on a task to mark it as completed
- Click the delete button to remove a task


## Technologies Used
- React (frontend library)
- Tailwind CSS (for styling)
- JavaScript (ES6+)


## Folder Structure
```bash
todo-App/
├─ src/
│  ├─ components/
│  │  ├─ Input.jsx
│  │  ├─ Task.jsx
│  ├─ App.js
│  ├─ index.js
│  ├─ index.css
├─ package.json
├─ tailwind.config.js
└─ README.md
```

## React Concepts Learned in This App
### 1️⃣ useState
- useState is a React Hook that lets you add state (dynamic values) to a functional component
- Example usage: manage the task list and input box


### 1️⃣ Conditional Rendering
- Conditional rendering lets you show or hide parts of the UI based on state or conditions
- Example usage: show "No tasks yet!" when task list is empty
- Example usage: show priority badges only when needed


### 3️⃣ Parent ↔ Child Communication
- Parent passes state down to child via props
- Child updates parent state via callback functions
- Example usage: App.js passes taskList and setTaskList to Input.jsx
- Child Input.jsx updates taskList in the parent


## Contributing
1. Fork the repository
2. Create a new branch: git checkout -b feature-name
3. Make your changes
4. Commit your changes: git commit -m "Add new feature"
5. Push to the branch: git push origin feature-name
6. Create a pull request


## License
This project is licensed under the MIT License.



---

This version ensures:

- **Everything is copy-paste ready**  
- No broken text outside code blocks  
- Clean, professional, and consistent formatting  

