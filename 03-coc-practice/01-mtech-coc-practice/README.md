# MTech COC Practice Project

![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)

A practice project that I built to prepare for the COC exam (occupational code EISWDDBAL-IV). It follows the structure of the two exam projects, with the scenario of the MTech Import and Export Company. It is a learning project and not a production system.

## Contents

- [The Two Projects](#the-two-projects)
- [Folder Structure](#folder-structure)
- [Project 1: Documents](#project-1-documents)
- [Project 2: Web System](#project-2-web-system)
- [Database](#database)
- [Pages and Scripts](#pages-and-scripts)
- [Getting Started](#getting-started)
- [Task 6: Protection and Recovery](#task-6-protection-and-recovery)
- [Security Notes and Limitations](#security-notes-and-limitations)
- [Core Takeaway](#core-takeaway)

## The Two Projects

| Project | Title | Time | What it covers |
|---|---|---|---|
| 1 | Manage Web-Based System | 1 hour 30 minutes | Planning documents: BOQ, activity plan, schedule, ERD, scalability plan, maintenance and recovery plan |
| 2 | Develop Dynamic Web-Based System | 3 hours | A working system: database, CSS, HTML pages, PHP scripts, backup, protection, and remote access |

## Folder Structure

```text
03-mtech-coc-practice/
├── project-1-documents/
│   ├── question.md
│   └── README.md
├── project-2-web-system/
│   ├── MTECH/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── php/
│   │   │   ├── db.php
│   │   │   ├── login.php
│   │   │   ├── customer_insert.php
│   │   │   ├── customer_search.php
│   │   │   ├── customer_delete.php
│   │   │   ├── customer_list.php
│   │   │   ├── employee_insert.php
│   │   │   ├── employee_search.php
│   │   │   ├── employee_delete.php
│   │   │   ├── employee_list.php
│   │   │   ├── item_insert.php
│   │   │   ├── item_search.php
│   │   │   ├── item_delete.php
│   │   │   └── item_list.php
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── customer.html
│   │   ├── employee.html
│   │   └── item.html
│   ├── database/
│   │   ├── company.sql
│   │   └── company_backup.sql
│   └── question.md
└── README.md
```

## Project 1: Documents

The question is in [`project-1-documents/question.md`](./project-1-documents/question.md), and the answer is in [`project-1-documents/README.md`](./project-1-documents/README.md). It has six tasks:

1. Bill of Quantities, with equipment and staffing tables, and a total budget of 964,500 ETB
2. Activity plan, with 7 activities and a responsible person for each
3. Work time schedule, as a Gantt chart over 4 weeks
4. Database and system architecture, with an ERD of the four divisions and a three-tier web architecture
5. Scalability and standardization plan
6. Maintenance procedures and a recovery plan

## Project 2: Web System

The question is in [`project-2-web-system/question.md`](./project-2-web-system/question.md). The system manages the customers, employees, items, and transactions of the company, which has four divisions: Stock, Finance, Customer Relation, and Human Resource.

| Layer | Technology |
|---|---|
| Pages | HTML |
| Styling | One external CSS file |
| Server-side | PHP with mysqli and prepared statements |
| Database | MySQL (MAMP or XAMPP) |

Features:

- Login that checks the account and password against `login_table`
- Register a customer, an employee, or an item
- Search a customer, an employee, or an item by ID
- Delete a customer, an employee, or an item by ID
- Display all customers, employees, or items

## Database

Database name: `company`

| Table | Columns | Division |
|---|---|---|
| `cust_table` | CUST_ID, CUST_NAME, CUST_TYPE, COUNTRY, PHONE | Customer Relation |
| `emp_table` | EMP_ID, EMP_NAME, DIVISION | Human Resource |
| `item_table` | ITEM_ID, ITEM_NAME, TRADE_TYPE | Stock |
| `trans_table` | TRANS_ID, CUST_ID, AMOUNT | Finance |
| `login_table` | ACCOUNT, PASSWORD | none |

MySQL on Windows saves table names in lowercase. The data is in [`database/company.sql`](./project-2-web-system/database/company.sql).

## Pages and Scripts

Each page has one form, and each button sends the form to a different script with the `formaction` attribute.

| Page | Button | Script |
|---|---|---|
| `login.html` | Login | `login.php` |
| `customer.html` | Submit, Search, Delete, Display | `customer_insert.php`, `customer_search.php`, `customer_delete.php`, `customer_list.php` |
| `employee.html` | Submit, Search, Delete, Display | `employee_insert.php`, `employee_search.php`, `employee_delete.php`, `employee_list.php` |
| `item.html` | Submit, Search, Delete, Display | `item_insert.php`, `item_search.php`, `item_delete.php`, `item_list.php` |

The Update button is on the pages, as in the wireframe, but it has no script.

All scripts that use typed values follow the same four steps: prepare the query with `?` placeholders, bind the values, execute, and get the result.

## Getting Started

### 1. Database

1. Start MySQL.
2. In phpMyAdmin, create an empty database named `company`.
3. Select it, open the **Import** tab, and import `database/company.sql`.

### 2. Connection

All scripts include `MTECH/php/db.php`:

```php
$conn = mysqli_connect("localhost", "root", "root", "company");
```

The MySQL password is `root` in MAMP and empty (`""`) in XAMPP, so this is the only line to change between the two.

### 3. Run the pages

**With XAMPP:** copy the `MTECH` folder into `C:\xampp\htdocs\`, start Apache and MySQL, and open `http://localhost/MTECH/index.html`.

**With the PHP built-in server (used while practicing with MAMP):** start it in the `project-2-web-system` folder, and keep MySQL running:

```bash
php -S localhost:8000
```

Then open `http://localhost:8000/MTECH/index.html`.

Login with `Account1` and `12345`.

## Task 6: Protection and Recovery

- **Backup and restore:** the database was exported to `company_backup.sql`, then imported into an empty database named `company_restore`. All five tables and their rows matched the original.
- **System protection:** the project folder was scanned with Microsoft Defender, and a weekly quick scan was scheduled with Task Scheduler.
- **Remote access:** the server was started on `0.0.0.0`, the firewall was allowed on the private network, and the pages were opened from a phone on the same Wi-Fi using the IP address of the computer.

## Security Notes and Limitations

- **Prepared statements:** typed values are never part of the SQL text, which protects against SQL injection.
- **Plain text passwords:** the exam dataset gives the passwords in plain text, so `login_table` stores them that way. A real system would store a hash.
- **No sessions:** the login only redirects to the home page, and the other pages are not protected.
- **Duplicate IDs:** inserting an ID that already exists stops with a PHP error, and no friendly message is shown.
- **No Update script:** the question does not ask for it.
- **Remote access:** only on a private network that I trust.

## Core Takeaway

> Every PHP script that talks to the database follows the same four steps: prepare, bind, execute, and get the result.