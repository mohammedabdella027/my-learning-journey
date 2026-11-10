# Project 1: Implementation and Architecture Plan

Manage Web-Based System for MTech Import and Export Company. Occupational code EISWDDBAL-IV.

| Field | Detail |
|---|---|
| Organization | MTech Import and Export Company |
| Prepared by | [Candidate name] |
| Currency | Ethiopian Birr (ETB) |
| Project cycle | 28 days (4 weeks) |

## Executive Summary and Budget Overview

This plan outlines the technical and operational roadmap for the MTech Import and Export web-based management system. The company exports mining products, livestock, and coffee, and imports machinery, food and beverages, and cosmetics. The system serves four divisions: Stock, Finance, Customer Relation, and Human Resource. The project cost is made of equipment and software procurement (620,500 ETB) and one month of professional staffing (344,000 ETB), which gives a total budget of 964,500 ETB.

## Task 1: Bill of Quantities (BOQ)

### Material Requirements and Equipment Procurement Plan

| S/N | Items and Purpose | Item Description and Specifications | Unit | Qty | Unit Price (ETB) | Total Price (ETB) |
|---|---|---|---|---|---|---|
| 1 | Laptop for design and coding | Core i5, 8GB RAM, 512GB SSD | Pcs | 4 | 90,000 | 360,000 |
| 2 | Server PC for administration | Core i7, 16GB RAM, 1TB SSD | Pcs | 1 | 200,000 | 200,000 |
| 3 | External storage for backup | External HDD, 2TB capacity | Pcs | 1 | 15,000 | 15,000 |
| 4 | Local server stack | MAMP or XAMPP: Apache, MySQL, PHP, phpMyAdmin | Pcs | 4 | Free | Free |
| 5 | System design and ERD tool | MS Visio Professional | Pcs | 2 | 10,000 | 20,000 |
| 6 | Documentation and reporting | MS Office Suite (Word, Excel) | Pcs | 2 | 9,000 | 18,000 |
| 7 | Code editor | VS Code or Notepad++ | Pcs | 4 | Free | Free |
| 8 | System protection | Antivirus software, one-year license | Pcs | 5 | 1,500 | 7,500 |

**Hardware and Software Sub-Total: 620,500 ETB**

### Human Resources and Professional Staffing Costs (one-month cycle)

| S/N | Professional Position | Quantity | Monthly Payment (ETB) | Total Monthly Cost (ETB) |
|---|---|---|---|---|
| 1 | Project Manager | 1 | 50,000 | 50,000 |
| 2 | Data Analyst | 2 | 35,000 | 70,000 |
| 3 | Database Designer | 2 | 40,000 | 80,000 |
| 4 | Application Programmer | 2 | 42,000 | 84,000 |
| 5 | Testing Team / QA Engineer | 2 | 30,000 | 60,000 |

**Human Resources Sub-Total: 344,000 ETB**

**Total Project Budget: 620,500 + 344,000 = 964,500 ETB**

## Task 2: Activity Plan and Responsibility Allocation

| S/N | Activity to Perform | Responsible Body | Core Responsibilities and Deliverables |
|---|---|---|---|
| 1 | Planning | Project Manager | Manage the overall project plan. Coordinate resources, budget, and milestones. |
| 2 | Requirement Analysis | Data Analyst | Collect the requirements of the Stock, Finance, Customer Relation, and Human Resource divisions. Define the functional requirements and the input and output flows. |
| 3 | Designing | Database Designer | Design the conceptual, logical, and physical database models. Create the entity relationship diagram and the table schemas. |
| 4 | Implementation | Application Programmer | Build the web pages and the server-side modules. Develop the database connection, the login, and the data operations. |
| 5 | Testing | Application Programmer and Testing Team | Conduct unit and integration testing. Check the source code and fix errors. |
| 6 | Maintenance and Support | Testing Team | Test the system under operational load. Identify and fix technical issues after deployment. |
| 7 | Documentation | Data Analyst, Database Designer, Application Programmer, and Testing Team | Compile the user manual. Write the technical documentation and the operating procedures. |

## Task 3: Work Time Schedule (Gantt Chart, 4 Weeks)

| Tasks | Days | Start Day | End Day | Week 1 | Week 2 | Week 3 | Week 4 |
|---|---|---|---|---|---|---|---|
| Planning | 3 | Day 1 | Day 3 | ■ | | | |
| Requirement Analysis | 5 | Day 4 | Day 8 | ■ | ■ | | |
| Designing | 5 | Day 9 | Day 13 | | ■ | | |
| Implementation | 6 | Day 14 | Day 19 | | ■ | ■ | |
| Testing | 4 | Day 20 | Day 23 | | | ■ | ■ |
| Maintenance and Support | 3 | Day 24 | Day 26 | | | | ■ |
| Documentation | 2 | Day 27 | Day 28 | | | | ■ |

Week 1 is days 1 to 7, week 2 is days 8 to 14, week 3 is days 15 to 21, and week 4 is days 22 to 28. The total duration is 28 days, which is 4 weeks.

## Task 4: Database and System Architecture

The database connects the four divisions through primary keys (PK) and foreign keys (FK).

### Entity Relationship Diagram (ERD)

```text
+-------------------------------+        +-------------------------------+
|        HR-DIVISION            |        |        STOCK-DIVISION         |
+-------------------------------+        +-------------------------------+
| PK  Emp-ID                    |  1:N   | PK  Item-ID                   |
|     Name (FName, LName)       |------->| FK  Emp-ID                    |
|     Email, Gender, Phone-no   | Manage |     Item-Name, Category       |
|     Division                  |        |     Quantity, Unit, Unit-Price|
+-------------------------------+        +---------------+---------------+
        |                |                               |
        | 1:N (Manage)   | 1:N (Manage)                  | 1:N (Sold or bought in)
        v                v                               v
+-------------------------------+        +-------------------------------+
|   CUSTOMER-RELATION-DIVISION  |  1:N   |        FINANCE-DIVISION       |
+-------------------------------+------->+-------------------------------+
| PK  Cust-ID                   | (Makes)| PK  Payment-ID                |
| FK  Emp-ID                    |        | FK  Emp-ID, Cust-ID, Item-ID  |
|     Name (FName, LName)       |        |     Payment-Type, Payment-Date|
|     Email, Phone-no           |        |     Total-Payment, Profit, Loss|
|     Country, Customer-Type    |        |                               |
+-------------------------------+        +-------------------------------+
```

### Relationships

| Parent table | Child table | Type | Meaning |
|---|---|---|---|
| HR (Emp-ID) | Stock | 1:N | One employee manages many items |
| HR (Emp-ID) | Customer Relation | 1:N | One employee manages many customers |
| HR (Emp-ID) | Finance | 1:N | One employee records many payments |
| Customer Relation (Cust-ID) | Finance | 1:N | One customer makes many payments |
| Stock (Item-ID) | Finance | 1:N | One item appears in many payments |

### Web System Architecture (Three Tiers)

```text
+-----------------+      HTTP      +----------------------+      SQL      +------------------+
|  Client tier    | <-------------> |  Application tier    | <------------> |  Data tier       |
|  Browser        |                 |  Apache + PHP        |                |  MySQL database  |
|  HTML and CSS   |                 |  Login, insert,      |                |  company         |
|                 |                 |  search, delete      |                |                  |
+-----------------+                 +----------------------+                +------------------+
```

## Task 5: Scalability and Standardization Plan

| S/N | Parameter | Standardization and Improvement Strategy |
|---|---|---|
| 1 | Response Time | Use database indexes on key columns such as the IDs. Optimize slow queries. Compress images and static files, and cache pages that rarely change. |
| 2 | Storage (Size) | Expand the database server disk capacity as the records grow. Archive old transaction records. Monitor free disk space regularly. |
| 3 | System Administration | Define and document the roles of every database administrator. Apply role-based access control, so each division sees only its own data. Use a firewall and strong passwords. |
| 4 | Maintenance and Support | Schedule daily database backups and keep a replica server. Provide technical support and monitor the system continuously. Follow naming and coding standards. |

## Task 6: Maintenance Procedures and Recovery Plan

### Routine Maintenance Procedures

| S/N | Procedure | Frequency | Responsible |
|---|---|---|---|
| 1 | Database backup to the external storage | Daily | Database Designer |
| 2 | Antivirus update and full system scan | Weekly | Testing Team |
| 3 | Software and security updates | Monthly | Application Programmer |
| 4 | Restore test of the latest backup | Quarterly | Database Designer |
| 5 | Review of user accounts and passwords | Quarterly | Project Manager |

### Risk and Recovery Plan

| S/N | Identified Risk | Likelihood | Preventive Measures | Corrective Actions |
|---|---|---|---|---|
| 1 | Attacks and hackers | Medium | Install and update antivirus software. Train users on password and security practices. Use SSL certificates. Run regular automated backups. | Isolate the affected system. Restore the system from the latest clean backup. Start the data recovery procedure. |
| 2 | Server down | Medium | Renew the domain and hosting on time. Keep a secondary failover server. Use a UPS for power cuts. | Switch to the backup server. Restore the service immediately and find the cause. |
| 3 | Data loss or corruption | Medium | Take daily backups to the external storage. Test restores regularly. Control who can delete records. | Restore the database from the latest backup. Check the data and fix the errors. |
| 4 | Slow response time | Medium | Increase the network bandwidth. Update the core software regularly. Keep the database indexed. | Optimize the code and the queries. Scale the server resources. |