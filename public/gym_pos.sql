-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2025 at 10:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym_pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_protected` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `username`, `email`, `password`, `is_protected`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'devadmin', 'dev@gym.com', '$2y$12$ndcXPxIf4B8FuJD7YFngg.H6VAF0QUlHDc5Vl5zEByPUod1CeUXhG', 1, NULL, '2025-11-11 10:54:51', '2025-11-11 10:54:51'),
(2, '', 'balochsaood88@gmail.com', '$2y$10$TgPpU4dP8F9H3SgH1bR3CuqE3uG4xK3FZn.q/BTOQxprcAUb7iB8i', 0, NULL, '2025-11-12 19:15:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `attendance_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `check_in_time` time DEFAULT NULL,
  `status` enum('Present','Absent','Late') NOT NULL DEFAULT 'Present',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `member_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendances`
--

INSERT INTO `attendances` (`attendance_id`, `date`, `check_in_time`, `status`, `created_at`, `updated_at`, `member_id`) VALUES
(1, '2025-11-11', '21:01:12', 'Present', '2025-11-11 11:01:13', '2025-11-11 11:01:13', 1),
(2, '2025-11-12', '13:50:53', 'Present', '2025-11-12 03:50:53', '2025-11-12 03:50:53', 1),
(3, '2025-11-12', '15:53:19', 'Present', '2025-11-12 05:53:19', '2025-11-12 05:53:19', 2),
(4, '2025-11-13', '15:53:57', 'Present', '2025-11-13 05:53:58', '2025-11-13 05:53:58', 1),
(5, '2025-11-13', '15:54:01', 'Present', '2025-11-13 05:54:03', '2025-11-13 05:54:03', 2),
(6, '2025-11-13', '15:54:06', 'Present', '2025-11-13 05:54:07', '2025-11-13 05:54:07', 3),
(7, '2025-11-14', '16:45:46', 'Present', '2025-11-14 06:45:47', '2025-11-14 06:45:47', 1),
(8, '2025-11-14', '16:45:51', 'Present', '2025-11-14 06:45:52', '2025-11-14 06:45:52', 2),
(9, '2025-11-14', '16:45:56', 'Present', '2025-11-14 06:45:57', '2025-11-14 06:45:57', 3),
(10, '2025-11-16', '17:04:40', 'Present', '2025-11-16 07:04:41', '2025-11-16 07:04:41', 2),
(11, '2025-11-16', '17:04:44', 'Present', '2025-11-16 07:04:44', '2025-11-16 07:04:44', 1),
(12, '2025-11-16', '17:04:47', 'Present', '2025-11-16 07:04:47', '2025-11-16 07:04:47', 3),
(13, '2025-11-17', '15:17:29', 'Present', '2025-11-17 05:17:30', '2025-11-17 05:17:30', 2),
(14, '2025-11-17', '15:17:32', 'Present', '2025-11-17 05:17:33', '2025-11-17 05:17:33', 1),
(15, '2025-11-17', '15:17:36', 'Present', '2025-11-17 05:17:36', '2025-11-17 05:17:36', 3),
(16, '2025-11-17', '21:45:47', 'Present', '2025-11-17 11:45:47', '2025-11-17 11:45:47', 4),
(17, '2025-11-18', '13:20:08', 'Present', '2025-11-18 03:20:09', '2025-11-18 03:20:09', 1),
(18, '2025-11-18', '13:20:12', 'Present', '2025-11-18 03:20:12', '2025-11-18 03:20:12', 2),
(19, '2025-11-18', '13:20:15', 'Present', '2025-11-18 03:20:15', '2025-11-18 03:20:15', 3),
(20, '2025-11-18', '13:20:18', 'Present', '2025-11-18 03:20:19', '2025-11-18 03:20:19', 4),
(21, '2025-11-20', '22:49:10', 'Present', '2025-11-20 12:49:11', '2025-11-20 12:49:11', 2);

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `expense_id` bigint(20) UNSIGNED NOT NULL,
  `category` enum('Rent','Electricity','Water','Salary','Equipment','Maintenance','Marketing','Supplies','Other') NOT NULL,
  `description` text DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` enum('Cash','Card','Bank Transfer','Check') NOT NULL,
  `expense_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`expense_id`, `category`, `description`, `amount`, `payment_method`, `expense_date`, `created_at`, `updated_at`) VALUES
(1, 'Water', 'waterr', 1000.00, 'Card', '2025-11-11', '2025-11-11 11:03:08', '2025-11-17 06:39:43');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `invoice_id` bigint(20) UNSIGNED NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `tax` decimal(10,2) NOT NULL DEFAULT 0.00,
  `discount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `grand_total` decimal(10,2) NOT NULL,
  `payment_method` enum('Cash','Card','Easypaisa','Wallet') NOT NULL,
  `order_type` enum('Membership','Product') NOT NULL,
  `status` enum('Paid','Refunded','Cancelled') NOT NULL DEFAULT 'Paid',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `member_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`invoice_id`, `total_amount`, `tax`, `discount`, `grand_total`, `payment_method`, `order_type`, `status`, `created_at`, `updated_at`, `member_id`) VALUES
(1, 59000.00, 5.00, 0.00, 61950.00, 'Easypaisa', 'Product', 'Paid', '2025-11-11 11:02:26', '2025-11-11 11:02:26', NULL),
(2, 22000.00, 5.00, 0.00, 23100.00, 'Card', 'Product', 'Paid', '2025-11-11 13:11:29', '2025-11-11 13:11:29', 1),
(3, 22000.00, 5.00, 0.00, 23100.00, 'Card', 'Product', 'Paid', '2025-11-12 05:51:03', '2025-11-12 05:51:03', 2),
(4, 110000.00, 5.00, 0.00, 115500.00, 'Wallet', 'Product', 'Paid', '2025-11-13 06:14:13', '2025-11-13 06:14:13', 3),
(5, 22000.00, 5.00, 0.00, 23100.00, 'Card', 'Product', 'Paid', '2025-11-16 16:58:27', '2025-11-16 16:58:27', 3),
(6, 55000.00, 5.00, 2.00, 56650.00, 'Easypaisa', 'Product', 'Paid', '2025-11-17 02:24:24', '2025-11-17 02:24:24', NULL),
(7, 22000.00, 5.00, 0.00, 23100.00, 'Easypaisa', 'Product', 'Paid', '2025-11-17 11:00:01', '2025-11-17 11:00:01', 4),
(8, 143000.00, 5.00, 0.00, 150150.00, 'Easypaisa', 'Product', 'Paid', '2025-11-17 11:20:05', '2025-11-17 11:20:05', 4),
(9, 55000.00, 5.00, 0.00, 57750.00, 'Cash', 'Product', 'Paid', '2025-11-17 11:47:58', '2025-11-17 11:47:58', 1),
(10, 22000.00, 5.00, 1.00, 22880.00, 'Wallet', 'Product', 'Paid', '2025-11-17 12:11:45', '2025-11-17 12:11:45', NULL),
(11, 33000.00, 5.00, 0.00, 34650.00, 'Wallet', 'Product', 'Paid', '2025-11-17 12:12:05', '2025-11-17 12:12:05', 2),
(12, 33000.00, 5.00, 0.00, 34650.00, 'Card', 'Product', 'Paid', '2025-11-17 12:12:46', '2025-11-17 12:12:46', 2),
(13, 146500.00, 5.00, 0.00, 153825.00, 'Card', 'Membership', 'Paid', '2025-11-17 12:45:22', '2025-11-17 12:45:22', 2),
(14, 55000.00, 5.00, 0.00, 57750.00, 'Card', 'Product', 'Paid', '2025-11-17 12:46:00', '2025-11-17 12:46:00', NULL),
(15, 33000.00, 5.00, 0.00, 34650.00, 'Wallet', 'Product', 'Paid', '2025-11-17 13:00:45', '2025-11-17 13:00:45', 4),
(16, 55000.00, 5.00, 0.00, 57750.00, 'Card', 'Product', 'Paid', '2025-11-17 13:13:41', '2025-11-17 13:13:41', NULL),
(17, 88000.00, 5.00, 0.00, 92400.00, 'Card', 'Product', 'Paid', '2025-11-17 13:15:18', '2025-11-17 13:15:18', 4),
(18, 14500.00, 5.00, 0.00, 15225.00, 'Wallet', 'Membership', 'Paid', '2025-11-17 13:39:29', '2025-11-17 13:39:29', 2),
(19, 165000.00, 5.00, 0.00, 173250.00, 'Easypaisa', 'Product', 'Paid', '2025-11-17 13:42:13', '2025-11-17 13:42:13', 3),
(20, 55000.00, 5.00, 8.00, 53350.00, 'Cash', 'Product', 'Paid', '2025-11-17 13:51:42', '2025-11-17 13:51:42', 2),
(21, 33000.00, 5.00, 0.00, 34650.00, 'Easypaisa', 'Product', 'Paid', '2025-11-17 13:56:37', '2025-11-17 13:56:37', 2),
(22, 33000.00, 5.00, 0.00, 34650.00, 'Easypaisa', 'Product', 'Paid', '2025-11-17 13:57:09', '2025-11-17 13:57:09', 2),
(23, 88000.00, 5.00, 0.00, 92400.00, 'Card', 'Product', 'Paid', '2025-11-18 04:59:30', '2025-11-18 04:59:30', 2),
(29, 69500.00, 5.00, 0.00, 72975.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 05:37:29', '2025-11-18 05:37:29', 4),
(30, 33000.00, 5.00, 0.00, 34650.00, 'Easypaisa', 'Product', 'Paid', '2025-11-18 05:38:44', '2025-11-18 05:38:44', 1),
(31, 55000.00, 5.00, 0.00, 57750.00, 'Card', 'Product', 'Paid', '2025-11-18 05:41:39', '2025-11-18 05:41:39', 3),
(32, 33000.00, 5.00, 0.00, 34650.00, 'Card', 'Product', 'Paid', '2025-11-18 06:13:19', '2025-11-18 06:13:19', 1),
(33, 33000.00, 5.00, 0.00, 34650.00, 'Card', 'Product', 'Paid', '2025-11-18 06:13:30', '2025-11-18 06:13:30', 2),
(34, 22000.00, 5.00, 0.00, 23100.00, 'Card', 'Product', 'Paid', '2025-11-18 06:13:53', '2025-11-18 06:13:53', 3),
(35, 22000.00, 5.00, 0.00, 23100.00, 'Wallet', 'Product', 'Paid', '2025-11-18 06:22:13', '2025-11-18 06:22:13', 3),
(36, 55000.00, 5.00, 0.00, 57750.00, 'Easypaisa', 'Product', 'Paid', '2025-11-18 06:24:35', '2025-11-18 06:24:35', 4),
(37, 22000.00, 5.00, 0.00, 23100.00, 'Card', 'Product', 'Paid', '2025-11-18 06:25:56', '2025-11-18 06:25:56', 3),
(38, 14500.00, 5.00, 0.00, 15225.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 06:29:36', '2025-11-18 06:29:36', 4),
(39, 14500.00, 5.00, 2.00, 14935.00, 'Wallet', 'Membership', 'Paid', '2025-11-18 06:33:24', '2025-11-18 06:33:24', 3),
(40, 14500.00, 5.00, 0.00, 15225.00, 'Wallet', 'Membership', 'Paid', '2025-11-18 06:33:41', '2025-11-18 06:33:41', 1),
(41, 124500.00, 5.00, 0.00, 130725.00, 'Easypaisa', 'Product', 'Paid', '2025-11-18 06:35:30', '2025-11-18 06:35:30', 2),
(42, 14500.00, 5.00, 0.00, 15225.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 09:57:01', '2025-11-18 09:57:01', 5),
(43, 22000.00, 5.00, 0.00, 23100.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 10:17:49', '2025-11-18 10:17:49', 2),
(44, 22000.00, 5.00, 0.00, 23100.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 10:18:23', '2025-11-18 10:18:23', 2),
(45, 55000.00, 5.00, 0.00, 57750.00, 'Card', 'Product', 'Paid', '2025-11-18 10:40:20', '2025-11-18 10:40:20', 2),
(46, 22000.00, 5.00, 0.00, 23100.00, 'Cash', 'Membership', 'Paid', '2025-11-18 11:17:12', '2025-11-18 11:17:12', 5),
(47, 22000.00, 5.00, 0.00, 23100.00, 'Cash', 'Membership', 'Paid', '2025-11-18 11:34:33', '2025-11-18 11:34:33', 3),
(48, 22000.00, 5.00, 0.00, 23100.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 15:30:34', '2025-11-18 15:30:34', 3),
(49, 22000.00, 5.00, 0.00, 23100.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 15:35:44', '2025-11-18 15:35:44', 2),
(50, 22000.00, 5.00, 0.00, 23100.00, 'Easypaisa', 'Membership', 'Paid', '2025-11-18 15:39:40', '2025-11-18 15:39:40', 3),
(51, 132000.00, 5.00, 0.00, 138600.00, 'Wallet', 'Product', 'Paid', '2025-11-18 15:43:35', '2025-11-18 15:43:35', 4),
(52, 96000.00, 5.00, 0.00, 100800.00, 'Cash', 'Membership', 'Paid', '2025-11-20 06:35:43', '2025-11-20 06:35:43', 2),
(53, 30000.00, 5.00, 0.00, 31500.00, 'Cash', 'Membership', 'Paid', '2025-11-20 12:54:57', '2025-11-20 12:54:57', 5);

-- --------------------------------------------------------

--
-- Table structure for table `invoice_items`
--

CREATE TABLE `invoice_items` (
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `member_id` bigint(20) UNSIGNED DEFAULT NULL,
  `invoice_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `subtotal` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoice_items`
--

INSERT INTO `invoice_items` (`item_id`, `product_id`, `member_id`, `invoice_id`, `quantity`, `subtotal`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, 1, 2, 44000.00, '2025-11-11 11:02:26', '2025-11-11 11:02:26'),
(2, NULL, NULL, 1, 1, 15000.00, '2025-11-11 11:02:26', '2025-11-11 11:02:26'),
(3, 1, NULL, 2, 1, 22000.00, '2025-11-11 13:11:29', '2025-11-11 13:11:29'),
(4, 1, NULL, 3, 1, 22000.00, '2025-11-12 05:51:03', '2025-11-12 05:51:03'),
(5, 2, NULL, 4, 2, 66000.00, '2025-11-13 06:14:13', '2025-11-13 06:14:13'),
(6, 1, NULL, 4, 2, 44000.00, '2025-11-13 06:14:13', '2025-11-13 06:14:13'),
(7, 1, NULL, 5, 1, 22000.00, '2025-11-16 16:58:27', '2025-11-16 16:58:27'),
(8, 2, NULL, 6, 1, 33000.00, '2025-11-17 02:24:24', '2025-11-17 02:24:24'),
(9, 1, NULL, 6, 1, 22000.00, '2025-11-17 02:24:24', '2025-11-17 02:24:24'),
(10, 1, NULL, 7, 1, 22000.00, '2025-11-17 11:00:01', '2025-11-17 11:00:01'),
(11, 1, NULL, 8, 2, 44000.00, '2025-11-17 11:20:05', '2025-11-17 11:20:05'),
(12, 2, NULL, 8, 3, 99000.00, '2025-11-17 11:20:05', '2025-11-17 11:20:05'),
(13, 1, NULL, 9, 1, 22000.00, '2025-11-17 11:47:58', '2025-11-17 11:47:58'),
(14, 2, NULL, 9, 1, 33000.00, '2025-11-17 11:47:58', '2025-11-17 11:47:58'),
(15, 1, NULL, 10, 1, 22000.00, '2025-11-17 12:11:45', '2025-11-17 12:11:45'),
(16, 2, NULL, 11, 1, 33000.00, '2025-11-17 12:12:05', '2025-11-17 12:12:05'),
(17, 2, NULL, 12, 1, 33000.00, '2025-11-17 12:12:46', '2025-11-17 12:12:46'),
(18, NULL, 2, 13, 1, 14500.00, '2025-11-17 12:45:22', '2025-11-17 12:45:22'),
(19, 1, NULL, 13, 3, 66000.00, '2025-11-17 12:45:22', '2025-11-17 12:45:22'),
(20, 2, NULL, 13, 2, 66000.00, '2025-11-17 12:45:22', '2025-11-17 12:45:22'),
(21, 2, NULL, 14, 1, 33000.00, '2025-11-17 12:46:00', '2025-11-17 12:46:00'),
(22, 1, NULL, 14, 1, 22000.00, '2025-11-17 12:46:00', '2025-11-17 12:46:00'),
(23, 2, NULL, 15, 1, 33000.00, '2025-11-17 13:00:45', '2025-11-17 13:00:45'),
(29, 2, NULL, 19, 1, 33000.00, '2025-11-17 13:42:13', '2025-11-17 13:42:13'),
(30, 1, NULL, 19, 6, 132000.00, '2025-11-17 13:42:13', '2025-11-17 13:42:13'),
(31, 2, NULL, 20, 1, 33000.00, '2025-11-17 13:51:42', '2025-11-17 13:51:42'),
(32, 1, NULL, 20, 1, 22000.00, '2025-11-17 13:51:42', '2025-11-17 13:51:42'),
(33, 2, NULL, 21, 1, 33000.00, '2025-11-17 13:56:37', '2025-11-17 13:56:37'),
(34, 2, NULL, 22, 1, 33000.00, '2025-11-17 13:57:09', '2025-11-17 13:57:09'),
(35, 2, NULL, 23, 2, 66000.00, '2025-11-18 04:59:30', '2025-11-18 04:59:30'),
(36, 1, NULL, 23, 1, 22000.00, '2025-11-18 04:59:30', '2025-11-18 04:59:30'),
(43, NULL, 4, 29, 1, 14500.00, '2025-11-18 05:37:29', '2025-11-18 05:37:29'),
(44, 2, NULL, 29, 1, 33000.00, '2025-11-18 05:37:29', '2025-11-18 05:37:29'),
(45, 1, NULL, 29, 1, 22000.00, '2025-11-18 05:37:29', '2025-11-18 05:37:29'),
(46, 2, NULL, 30, 1, 33000.00, '2025-11-18 05:38:44', '2025-11-18 05:38:44'),
(47, 2, NULL, 31, 1, 33000.00, '2025-11-18 05:41:39', '2025-11-18 05:41:39'),
(48, 1, NULL, 31, 1, 22000.00, '2025-11-18 05:41:39', '2025-11-18 05:41:39'),
(49, 2, NULL, 32, 1, 33000.00, '2025-11-18 06:13:19', '2025-11-18 06:13:19'),
(50, 2, NULL, 33, 1, 33000.00, '2025-11-18 06:13:30', '2025-11-18 06:13:30'),
(51, 1, NULL, 34, 1, 22000.00, '2025-11-18 06:13:53', '2025-11-18 06:13:53'),
(52, 1, NULL, 35, 1, 22000.00, '2025-11-18 06:22:13', '2025-11-18 06:22:13'),
(53, 2, NULL, 36, 1, 33000.00, '2025-11-18 06:24:35', '2025-11-18 06:24:35'),
(54, 1, NULL, 36, 1, 22000.00, '2025-11-18 06:24:35', '2025-11-18 06:24:35'),
(55, 1, NULL, 37, 1, 22000.00, '2025-11-18 06:25:56', '2025-11-18 06:25:56'),
(56, NULL, 4, 38, 1, 14500.00, '2025-11-18 06:29:36', '2025-11-18 06:29:36'),
(57, NULL, 3, 39, 1, 14500.00, '2025-11-18 06:33:24', '2025-11-18 06:33:24'),
(58, NULL, 1, 40, 1, 14500.00, '2025-11-18 06:33:41', '2025-11-18 06:33:41'),
(59, 1, NULL, 41, 2, 44000.00, '2025-11-18 06:35:30', '2025-11-18 06:35:30'),
(60, 2, NULL, 41, 2, 66000.00, '2025-11-18 06:35:30', '2025-11-18 06:35:30'),
(61, NULL, 2, 41, 1, 14500.00, '2025-11-18 06:35:30', '2025-11-18 06:35:30'),
(62, NULL, 5, 42, 1, 14500.00, '2025-11-18 09:57:01', '2025-11-18 09:57:01'),
(63, NULL, 2, 43, 1, 22000.00, '2025-11-18 10:17:49', '2025-11-18 10:17:49'),
(64, NULL, 2, 44, 1, 22000.00, '2025-11-18 10:18:23', '2025-11-18 10:18:23'),
(65, 2, NULL, 45, 1, 33000.00, '2025-11-18 10:40:20', '2025-11-18 10:40:20'),
(66, NULL, 2, 45, 1, 22000.00, '2025-11-18 10:40:20', '2025-11-18 10:40:20'),
(67, NULL, 5, 46, 1, 22000.00, '2025-11-18 11:17:12', '2025-11-18 11:17:12'),
(68, NULL, 3, 47, 1, 22000.00, '2025-11-18 11:34:33', '2025-11-18 11:34:33'),
(69, NULL, 3, 48, 1, 22000.00, '2025-11-18 15:30:34', '2025-11-18 15:30:34'),
(70, NULL, 2, 49, 1, 22000.00, '2025-11-18 15:35:44', '2025-11-18 15:35:44'),
(71, NULL, 3, 50, 1, 22000.00, '2025-11-18 15:39:40', '2025-11-18 15:39:40'),
(72, 2, NULL, 51, 4, 132000.00, '2025-11-18 15:43:35', '2025-11-18 15:43:35'),
(73, NULL, 2, 52, 1, 30000.00, '2025-11-20 06:35:43', '2025-11-20 06:35:43'),
(74, 2, NULL, 52, 2, 66000.00, '2025-11-20 06:35:43', '2025-11-20 06:35:43'),
(75, NULL, 5, 53, 1, 30000.00, '2025-11-20 12:54:57', '2025-11-20 12:54:57');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `member_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `age` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `joining_date` date NOT NULL,
  `start_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `payment_type` enum('Cash','Card','Wallet','Easypaisa') NOT NULL,
  `notes` text DEFAULT NULL,
  `photo` longtext DEFAULT NULL,
  `status` enum('Active','Expired') NOT NULL DEFAULT 'Active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `membership_plan_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `name`, `gender`, `age`, `phone`, `email`, `address`, `joining_date`, `start_date`, `expiry_date`, `payment_type`, `notes`, `photo`, `status`, `created_at`, `updated_at`, `membership_plan_id`) VALUES
(1, 'saud', 'Male', 25, '03072264628', 'balochsaood@gmail.com', 'bihar colony', '2025-11-11', '2025-11-11', '2026-04-10', 'Easypaisa', 'hey', 'photos/mq6LVNtY9hwlrt2pwgZLQJMFejMCxHlCipkNRida.jpg', 'Active', '2025-11-11 10:58:29', '2025-11-19 02:03:57', 5),
(2, 'abr', 'Other', 23, '03032264629', 'abr@gmail.com', 'dubai chowk', '2025-11-12', '2025-11-12', '2025-11-20', 'Easypaisa', 'hey', 'photos/jeShOzQz2OGoFJUJxpsFC36RwncnXy7CPZA0AFho.jpg', 'Active', '2025-11-12 05:49:10', '2025-11-20 12:38:37', 1),
(3, 'shahzad', 'Male', 33, '03462325429', 'shahzad@gmail.com', 'rexer lain', '2025-11-13', '2025-11-13', '2026-01-12', 'Cash', 'shahzad pappu bacha', 'photos/F2cKKXoWwGVKJQ6miQaZYYWJZHL8dEVdhg7N8rvr.jpg', 'Active', '2025-11-13 05:00:05', '2025-11-20 12:42:48', 1),
(4, 'Abid Ali', 'Male', 33, '03078686546', 'abidbaloch@gmail.com', 'garden west, karachi', '2025-11-17', '2025-11-17', '2026-01-16', 'Card', 'helooo', 'photos/7HSHRvDAVJUUFV7HpFAkN7hp03JLlXp3spr2wGy2.jpg', 'Active', '2025-11-17 10:58:21', '2025-11-17 10:58:21', 1),
(5, 'ahtisham', 'Male', 23, '03456789090', 'ahtishamaslam@gmail.com', 'dubai chowk', '2025-11-18', '2025-11-18', '2025-11-29', 'Card', 'ahtisham aslam', 'photos/TUy8PClTo19hYZBBBXmM84IrR5XsDjaI5Q9EDVHn.jpg', 'Active', '2025-11-18 09:54:10', '2025-11-20 13:32:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `membership_plans`
--

CREATE TABLE `membership_plans` (
  `plan_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `duration_days` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount` decimal(5,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `membership_plans`
--

INSERT INTO `membership_plans` (`plan_id`, `name`, `duration_days`, `price`, `discount`, `created_at`, `updated_at`) VALUES
(1, 'VIP plan (gym + Cardio)', 60, 14500.00, 3.00, '2025-11-11 10:59:41', '2025-11-12 14:03:34'),
(3, 'couple plan (Gym + cardio + trainer)', 121, 22000.00, 0.00, '2025-11-18 10:02:07', '2025-11-18 15:44:17'),
(5, 'premium (Unlimited gym access, monthly progress check, group classes, locker access)', 150, 30000.00, 10.00, '2025-11-19 02:03:24', '2025-11-19 02:03:24');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_10_29_105017_create_admins_table', 1),
(5, '2025_10_29_105038_create_members_table', 1),
(6, '2025_10_29_105053_create_membership_plans_table', 1),
(7, '2025_10_29_105108_create_invoices_table', 1),
(8, '2025_10_29_105125_create_products_table', 1),
(9, '2025_10_29_105147_create_invoice_items_table', 1),
(10, '2025_10_29_105203_create_attendances_table', 1),
(11, '2025_10_29_105221_create_reports_table', 1),
(12, '2025_10_29_105237_create_settings_table', 1),
(13, '2025_10_29_105251_create_expenses_table', 1),
(14, '2025_11_11_092550_add_is_protected_to_admins_table', 2),
(15, '2025_10_31_140146_add_foreign_key_to_members_table', 3),
(16, '2025_11_11_161731_create_personal_access_tokens_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('balochsaood88@gmail.com', '$2y$12$3QSz3TMSCRnyANfAK6Fze.M7q0D2GvYPob7wQvRMcTJ4jFcBnHig.', '2025-11-13 16:09:19');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Admin', 1, 'admin-token', '1f3b0612defddf78fda82e986b1a5d92efa72a4615fc251756421c9f33d1705c', '[\"*\"]', NULL, NULL, '2025-11-11 13:06:06', '2025-11-11 13:06:06'),
(2, 'App\\Models\\Admin', 1, 'admin-token', '0d17c94b697fd720488ed4bd42addabc29c22142aae0e52ef3b596c587b1eab3', '[\"*\"]', NULL, NULL, '2025-11-12 03:50:18', '2025-11-12 03:50:18'),
(9, 'App\\Models\\Admin', 1, 'admin-token', '8a55c39e9c5459254e10dc1f0b80f66296919c74fe449ac78a1f1e7962e2eea1', '[\"*\"]', '2025-11-12 16:02:29', NULL, '2025-11-12 14:47:22', '2025-11-12 16:02:29'),
(14, 'App\\Models\\Admin', 1, 'admin-token', '22f9ebb7a941a2248d80f59e4072b1d2c5ce3fb743b30c1e8c738fbf38d49a77', '[\"*\"]', NULL, NULL, '2025-11-13 12:21:25', '2025-11-13 12:21:25'),
(24, 'App\\Models\\Admin', 1, 'admin-token', 'b7b6bbb4bb85222cabbc845c0ee293a138d4feaf6bf60e20ca56b078899e5b3a', '[\"*\"]', '2025-11-22 08:07:35', NULL, '2025-11-20 13:31:02', '2025-11-22 08:07:35');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `price`, `cost`, `name`, `image`, `stock`, `created_at`, `updated_at`) VALUES
(1, 22000.00, 16000.00, 'Mass gainer', 'products/yF00TaLrFu0xEuMPKEEZjUIbQyHKPPXXWf6IMwGS.jpg', 10, '2025-11-11 11:00:12', '2025-11-18 06:35:30'),
(2, 33000.00, 24500.00, 'whey protein', 'products/VIkB2OBIVQQG772JThcD9HNN01RkGF4VEDRsUqg2.jpg', 26, '2025-11-12 05:53:04', '2025-11-20 06:35:43');

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `report_id` bigint(20) UNSIGNED NOT NULL,
  `generated_by` bigint(20) UNSIGNED NOT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `report_type` enum('Sales','Profit','Attendance','Member','Expense') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('bFDwdhPLju65ovLGoOZH4ovtKLGEfNQeBtlCRaXA', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMDZhTkdOUWJRZHVyT3BwTEkzY3RmR0FudW9LdElSQllkTm9CdU92MCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1763312510),
('ED0kQGDjrUoJiVxlAafZeNInCx6myW30cOX8fLEt', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidWFoZ1FaaUNvRUVKS29MajBaTlZzRnprbG10eklGbXVnY1R2WUc1SCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1763065325),
('RKsxaFUocLJnGFGM94J2p6lJbRDVbQAuPTcVEgFE', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUFJRbWdsTE4waDIyemhZdEZkeWY4UlRJRHNpM2pVWTh2VFhnbXZvaCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1763068294),
('SiGEetoLnUtqez1IhBRmyzuSKfP99EIdgoTFNGOK', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidkNXQXZlOTJucWdTUmpTbVBtTER6djVoNEFLcUVyd3B6TDgyMjQxdyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1763118572),
('X3PHsJ5rl3feDrwDLHkWY08JHSNstgzdz3ThuWys', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiU0N5SEZKeFFuQk1sd045NFBlMG1KVUVwYXNpR2lQdldvQ0NWaVIxWSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1763053891),
('ZJpuYlyyrEF9itjLlPbXbjDdc6dJcbjppD7r4Vyw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTWFQRTl5dzNZanBDVG9EUUJKQ1l0ZmFndkRRQUpjWlJlcTVKNFlhOCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1763066160);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `setting_id` bigint(20) UNSIGNED NOT NULL,
  `gym_name` varchar(150) NOT NULL,
  `address` text DEFAULT NULL,
  `tax_rate` decimal(5,2) NOT NULL DEFAULT 0.00,
  `discount_rule` decimal(5,2) NOT NULL DEFAULT 0.00,
  `printer_type` enum('Thermal','A4') NOT NULL DEFAULT 'Thermal',
  `backup_path` varchar(255) DEFAULT NULL,
  `camera_device` varchar(100) DEFAULT NULL,
  `gym_logo` varchar(255) DEFAULT NULL,
  `theme_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `primary_color` varchar(255) NOT NULL,
  `secondary_color` varchar(255) NOT NULL,
  `background_color` varchar(255) NOT NULL,
  `text_color` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`setting_id`, `gym_name`, `address`, `tax_rate`, `discount_rule`, `printer_type`, `backup_path`, `camera_device`, `gym_logo`, `theme_id`, `created_at`, `updated_at`, `primary_color`, `secondary_color`, `background_color`, `text_color`) VALUES
(1, 'My Gym12456', '123 Fitness Street', 5.00, 3.00, 'Thermal', '', '', 'logos/kDxUjHB0dTvyvKzOFjVYuzKVPSB5cRoDLDQCTZUW.webp', 1, '2025-11-20 02:51:28', '2025-11-21 14:53:08', '#000000', '#ffffff', '#121212', '#000000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admins_username_unique` (`username`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`attendance_id`),
  ADD KEY `attendances_member_id_foreign` (`member_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`expense_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`invoice_id`),
  ADD KEY `invoices_member_id_foreign` (`member_id`);

--
-- Indexes for table `invoice_items`
--
ALTER TABLE `invoice_items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `invoice_items_invoice_id_foreign` (`invoice_id`),
  ADD KEY `invoice_items_product_id_foreign` (`product_id`),
  ADD KEY `invoice_items_member_id_foreign` (`member_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `members_membership_plan_id_foreign` (`membership_plan_id`);

--
-- Indexes for table `membership_plans`
--
ALTER TABLE `membership_plans`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `reports_generated_by_foreign` (`generated_by`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`setting_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `attendance_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `expense_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `invoice_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `invoice_items`
--
ALTER TABLE `invoice_items`
  MODIFY `item_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `membership_plans`
--
ALTER TABLE `membership_plans`
  MODIFY `plan_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `report_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `setting_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendances`
--
ALTER TABLE `attendances`
  ADD CONSTRAINT `attendances_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`member_id`) ON DELETE CASCADE;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`member_id`) ON DELETE CASCADE;

--
-- Constraints for table `invoice_items`
--
ALTER TABLE `invoice_items`
  ADD CONSTRAINT `invoice_items_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`invoice_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `invoice_items_member_id_foreign` FOREIGN KEY (`member_id`) REFERENCES `members` (`member_id`) ON DELETE SET NULL,
  ADD CONSTRAINT `invoice_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL;

--
-- Constraints for table `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `members_membership_plan_id_foreign` FOREIGN KEY (`membership_plan_id`) REFERENCES `membership_plans` (`plan_id`) ON DELETE SET NULL;

--
-- Constraints for table `reports`
--
ALTER TABLE `reports`
  ADD CONSTRAINT `reports_generated_by_foreign` FOREIGN KEY (`generated_by`) REFERENCES `admins` (`admin_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
