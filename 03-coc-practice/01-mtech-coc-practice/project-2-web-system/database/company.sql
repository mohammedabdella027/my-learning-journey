-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 23, 2026 at 07:25 PM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company`
--

-- --------------------------------------------------------

--
-- Table structure for table `cust_table`
--

CREATE TABLE `cust_table` (
  `CUST_ID` varchar(10) NOT NULL,
  `CUST_NAME` varchar(50) NOT NULL,
  `CUST_TYPE` varchar(20) NOT NULL,
  `COUNTRY` varchar(50) NOT NULL,
  `PHONE` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cust_table`
--

INSERT INTO `cust_table` (`CUST_ID`, `CUST_NAME`, `CUST_TYPE`, `COUNTRY`, `PHONE`) VALUES
('C001', 'Alemu', 'Importer', 'Ethiopia', '0911000001');

-- --------------------------------------------------------

--
-- Table structure for table `emp_table`
--

CREATE TABLE `emp_table` (
  `EMP_ID` varchar(10) NOT NULL,
  `EMP_NAME` varchar(50) NOT NULL,
  `DIVISION` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `emp_table`
--

INSERT INTO `emp_table` (`EMP_ID`, `EMP_NAME`, `DIVISION`) VALUES
('E001', 'Kemal', 'Stock'),
('E002', 'Usulu', 'Finance'),
('E003', 'Hassen', 'Customer Relation'),
('E004', 'Bikila', 'Human Resource');

-- --------------------------------------------------------

--
-- Table structure for table `item_table`
--

CREATE TABLE `item_table` (
  `ITEM_ID` varchar(10) NOT NULL,
  `ITEM_NAME` varchar(50) NOT NULL,
  `TRADE_TYPE` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item_table`
--

INSERT INTO `item_table` (`ITEM_ID`, `ITEM_NAME`, `TRADE_TYPE`) VALUES
('i001', 'Coffee', 'Export'),
('i002', 'Machinery', 'Import'),
('i003', 'Livestock', 'Export'),
('i004', 'Cosmetics', 'Import');

-- --------------------------------------------------------

--
-- Table structure for table `login_table`
--

CREATE TABLE `login_table` (
  `ACCOUNT` varchar(30) NOT NULL,
  `PASSWORD` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login_table`
--

INSERT INTO `login_table` (`ACCOUNT`, `PASSWORD`) VALUES
('Account1', '12345'),
('Account2', '54321');

-- --------------------------------------------------------

--
-- Table structure for table `trans_table`
--

CREATE TABLE `trans_table` (
  `TRANS_ID` varchar(10) NOT NULL,
  `CUST_ID` varchar(10) NOT NULL,
  `AMOUNT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `trans_table`
--

INSERT INTO `trans_table` (`TRANS_ID`, `CUST_ID`, `AMOUNT`) VALUES
('TR01', 'C001', 15000),
('TR02', 'C002', 42000),
('TR03', 'C003', 8500),
('TR04', 'C004', 27000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cust_table`
--
ALTER TABLE `cust_table`
  ADD PRIMARY KEY (`CUST_ID`);

--
-- Indexes for table `emp_table`
--
ALTER TABLE `emp_table`
  ADD PRIMARY KEY (`EMP_ID`);

--
-- Indexes for table `item_table`
--
ALTER TABLE `item_table`
  ADD PRIMARY KEY (`ITEM_ID`);

--
-- Indexes for table `login_table`
--
ALTER TABLE `login_table`
  ADD PRIMARY KEY (`ACCOUNT`);

--
-- Indexes for table `trans_table`
--
ALTER TABLE `trans_table`
  ADD PRIMARY KEY (`TRANS_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
