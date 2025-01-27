# Portfolio Builder Project

## Roles and Access

### **Roles:**

1. **Admin**

   - Can create, edit, or delete templates.
   - Can view all users and manage their data.

2. **Portfolio Holder**

   - Can enter data to build their portfolio using templates.
   - Can manage their profile.

3. **Normal User**
   - Can only view all templates.

---

## **Data Structure**

### Portfolio Holder

```json
{
  "userName": "string (unique)",
  "fullName": "string",
  "email": "string",
  "password": "string",
  "profileUrl": "string",
  "portfolioId": "null or objectId",
  "role": "holder",
  "createdAt": "timestamp",
  "personalUrl": "string"
}
```

---

## Features

### Admin

- Manage templates (Create, Edit, Delete).
- View all users.
- Control user data (update, delete).

### Portfolio Holder

- Build portfolio by filling in template data.
- Manage profile information.

### Normal User

- Browse all available templates.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

---

## Contribution Guidelines

- Fork the repository.
- Create a feature branch:
  ```bash
  git checkout -b feature/your-feature-name
  ```
- Commit your changes:
  ```bash
  git commit -m "Add your feature description"
  ```
- Push to the branch:
  ```bash
  git push origin feature/your-feature-name
  ```
- Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
