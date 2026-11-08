# Project 2: Develop Dynamic Web-Based System (Question)

Practice version for the COC exam, occupational code EISWDDBAL-IV. Same structure and tasks as the exam package, with the scenario changed from a school to the MTech Import and Export Company.

| Field | Detail |
|---|---|
| Project title | Develop Dynamic Web-Based System |
| Duration | 3 hours |
| Stack | HTML, external CSS, PHP, MySQL (XAMPP or MAMP) |
| Database name | company |
| Project folder | MTECH/ |

**Instruction:** Design, create, and populate the database, and construct the functional dynamic web system based on the specifications below.

## Scenario and Business Rules

Assume that you are requested to develop a web-based management system for MTech Import and Export Company. The company exports items such as mining products, livestock, and coffee, and imports items such as machinery, food and beverages, and cosmetics. The company has four divisions: Stock, Finance, Customer Relation, and Human Resource. The system records information about customers, employees, items, and financial transactions, and it displays the records of each division transparently.

Core business rules:

- Customer, employee, item, and transaction details shall be registered in the database.
- A search facility must be provided for customers, employees, and items.
- The system shall display list records for customers, employees, items, and transactions.
- Finance employees must be enabled to record customer transactions.
- Privileged users can perform Update and Delete operations across all records.
- A secure Login form must be implemented.

## Database Specifications and Datasets

**Task 1 and 2:** create the database and the tables, and insert the data. Database name: `company`. Choose the data types and the primary keys yourself.

### 1. Customer Table (Cust_table), Customer Relation division

| CUST_ID | CUST_NAME | CUST_TYPE | COUNTRY | PHONE |
|---|---|---|---|---|
| C001 | Alemu | Importer | Ethiopia | 0911000001 |
| C002 | Megersa | Exporter | Kenya | 0922000002 |
| C003 | Kebede | Importer | China | 0933000003 |
| C004 | Helen | Exporter | Germany | 0944000004 |

### 2. Employee Table (Emp_table), Human Resource division

| EMP_ID | EMP_NAME | DIVISION |
|---|---|---|
| E001 | Kemal | Stock |
| E002 | Usulu | Finance |
| E003 | Hassen | Customer Relation |
| E004 | Bikila | Human Resource |

### 3. Item Table (Item_table), Stock division

| ITEM_ID | ITEM_NAME | TRADE_TYPE |
|---|---|---|
| i001 | Coffee | Export |
| i002 | Machinery | Import |
| i003 | Livestock | Export |
| i004 | Cosmetics | Import |

### 4. Transaction Table (Trans_table), Finance division

| TRANS_ID | CUST_ID | AMOUNT |
|---|---|---|
| TR01 | C001 | 15000 |
| TR02 | C002 | 42000 |
| TR03 | C003 | 8500 |
| TR04 | C004 | 27000 |

### 5. Login Table (Login_table)

| ACCOUNT | PASSWORD |
|---|---|
| Account1 | 12345 |
| Account2 | 54321 |

## Frontend CSS Styling Specifications

**Task 3:** create one external CSS file with the values below.

| No | Element or class | Property | Value |
|---|---|---|---|
| 1 | body | background-color | lightgrey |
| 1 | body | font-family | verdana |
| 1 | body | color | blue |
| 1 | body | margin | 0px |
| 1 | body | padding | 0px |
| 2 | h1 | color | green |
| 3 | p | text-align | justify |
| 4 | ul | list-style-type | none |
| 5 | li and a | display | block |
| 5 | li and a | color | black |
| 5 | li and a | padding | 20px 40px |
| 5 | li and a | text-decoration | none |
| 5 | li and a | float | left |
| 6 | header, footer | background-color | #777d6a |

## Layout Wireframes and Templates

**Task 4:** develop the HTML templates in the folder `MTECH/`, with working navigation links: `index.html`, `login.html`, `customer.html`, `employee.html`, `item.html`.

Navigation bar on every page:

```text
HOME | LOGIN | CUSTOMER REGISTRATION | EMPLOYEE REGISTRATION | ITEM REGISTRATION
```

### Wireframe 1: index.html

```text
WELCOME TO MTECH IMPORT AND EXPORT MANAGEMENT SYSTEM
Centralized portal for managing customer records, employee allocations, item details, and financial transactions across the Stock, Finance, Customer Relation, and Human Resource divisions.
Go to System Login
```

### Wireframe 2: login.html

```text
SYSTEM LOGIN
Account:
Password:
Login   Reset
```

### Wireframe 3: customer.html

```text
CUSTOMER REGISTRATION FORM
Name:   ID:   Type:   Country:   Phone:
Submit   Update   Display   Search   Delete
```

The `employee.html` page follows the same layout, with the fields Name, ID, and Division. The `item.html` page follows the same layout, with the fields Name, ID, and Trade Type.

## Backend Integration and Security

**Task 5:** write programming code to connect the front end with the back end.

- Write a server-side script to log in, checking the credentials against Login_table.
- Write server-side scripts to insert data from the forms into the customer, employee, and item tables.
- Implement search and retrieval functions for customer and employee profiles by ID.
- Display all registered employee records dynamically on the template.
- Implement a deletion script to remove specific customer records.
- Bonus: an Update script, because the wireframe has an Update button, and a list of the transactions.

**Task 6:** protect and recover data and the system.

- Configure system protection (install and run periodic scanning tools).
- Perform database backup and restoration procedures.
- Configure and test remote access to the web application across the network.