-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 03, 2023 at 12:58 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employees`
--

-- --------------------------------------------------------

--
-- Table structure for table `PROTOCOL_TABLE`
--

CREATE TABLE `PROTOCOL_TABLE` (
  `id` bigint(20) NOT NULL,
  `Номер протокола` int(255) NOT NULL,
  `Дата выдачи` date NOT NULL,
  `Ответственный сотрудник` varchar(255) NOT NULL,
  `Признак соответствия значений в протоколе нормам` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PROTOCOL_TABLE`
--

INSERT INTO `PROTOCOL_TABLE` (`id`, `Номер протокола`, `Дата выдачи`, `Ответственный сотрудник`, `Признак соответствия значений в протоколе нормам`) VALUES
(30, 2345, '2023-06-04', 'Королев', 'да'),
(31, 2346, '2023-03-27', 'Иванов', 'нет'),
(32, 2344, '2022-08-27', 'Сидоров', 'нет'),
(33, 2253, '2022-08-24', 'Кириенко', 'да'),
(34, 2221, '2021-02-01', 'Семенов', 'да'),
(35, 2191, '2021-01-31', 'Петренко', 'нет');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PROTOCOL_TABLE`
--
ALTER TABLE `PROTOCOL_TABLE`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PROTOCOL_TABLE`
--
ALTER TABLE `PROTOCOL_TABLE`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
