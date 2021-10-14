-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2021 at 09:43 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `gender` varchar(25) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `create_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `gender`, `email`, `password`, `create_datetime`) VALUES
(1, 'admin', 'male', 'test@gmail.com', '$2b$10$XYKc7/Tg0ZlhsR2Oa2uBkeJz22RVr94QGZ/JspYXkwZoLxc1En5Ja', '0000-00-00 00:00:00'),
(4, 'admin', 'male', 'admin@namasys.co', '$2b$10$sxv.XN7dJn86Bo156AgXFOahT5qrRfRmqtk1wPUqLjQr3Kx5zaW52', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(250) NOT NULL,
  `moNumber` varchar(25) NOT NULL,
  `email` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `create_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `moNumber`, `email`, `address`, `create_datetime`) VALUES
(1, 'test', '9659095236', 'test@gmail.com', '123, test', '0000-00-00 00:00:00'),
(2, 'johnDeo', '16526625555', 'john@gmail.com', '123, st. NY ', '0000-00-00 00:00:00'),
(3, 'Bret', '929983874', 'sincere@april.biz', 'Apt. 556,Gwenborough', '0000-00-00 00:00:00'),
(4, 'Antonette', '905667771', 'shanna@melissa.tv', 'Suite 879,Wisokyburgh', '0000-00-00 00:00:00'),
(5, 'Samantha', '595904157', 'nathan@yesenia.net', 'Douglas Extension,McKenziehaven', '0000-00-00 00:00:00'),
(6, 'Karianne', '539194257', 'julianne.OConner@kory.org', 'Apt. 692,South Elvis', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
