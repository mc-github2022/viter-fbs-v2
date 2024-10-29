-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 08:45 AM
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
-- Database: `viter-fbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `events_activities`
--

CREATE TABLE `events_activities` (
  `events_activities_aid` int(11) NOT NULL,
  `events_activities_img` varchar(100) NOT NULL,
  `events_activities_category` varchar(100) NOT NULL,
  `events_activities_title` varchar(200) NOT NULL,
  `events_activities_slug` varchar(100) NOT NULL,
  `events_activities_date` varchar(20) NOT NULL,
  `events_activities_description` text NOT NULL,
  `events_activities_created` datetime NOT NULL,
  `events_activities_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events_activities`
--

INSERT INTO `events_activities` (`events_activities_aid`, `events_activities_img`, `events_activities_category`, `events_activities_title`, `events_activities_slug`, `events_activities_date`, `events_activities_description`, `events_activities_created`, `events_activities_datetime`) VALUES
(2, 'webDevv.jpg', 'Web Development', 'How Virtual Assistants Can Boost You Productivity', '5-reason-your-business-needs-a-custom-web-application', '2024-10-03', '<p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit\n          voluptatibus voluptatum provident, explicabo maxime officia odio nihil\n          tempora vero quod esse mollitia architecto quam officiis quia a modi\n          minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\n          blanditiis vel consequuntur amet in voluptatibus nemo quas non esse\n          vero ipsum repellat sed ea nobis nulla est corrupti animi vitae,\n          repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt\n          sit quod quis aliquam commodi, quas architecto cupiditate atque quae\n          nisi! Eum, doloremque. Beatae repellat magni praesentium omnis. Non\n          quis esse dolores soluta deserunt, voluptatibus necessitatibus, odit\n          incidunt, impedit eligendi quia.\n        </p>\n        <p className=\"mb-4\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt\n          tempora voluptate animi hic, reprehenderit quam voluptatem sed labore\n          ullam corporis laudantium illum quibusdam vitae nihil temporibus?\n          Optio dignissimos quis praesentium deserunt tempora quas excepturi!\n          Dicta, suscipit laborum? Quas animi architecto vel dignissimos atque\n          consequuntur omnis veniam dolorum, sequi recusandae rem sapiente\n          aspernatur optio voluptatum! Inventore, animi? Magnam unde quod\n          officia!\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque\n          itaque eos ducimus necessitatibus odit minus aliquid iste quae, ab\n          fugiat nobis sed amet! Nesciunt numquam, nihil rerum natus accusamus\n          officiis. Dolorem, amet, omnis vero, et ad unde ut eligendi a dicta in\n          aperiam repudiandae facilis ipsa quo repellendus similique alias!\n        </p>', '0000-00-00 00:00:00', '2024-10-29 10:45:09'),
(3, 'vaBlog.jpg', 'Virtual Office', 'Events How Virtual Assistants Can Boost You Productivity', 'how-virtual-assistants-can-boost-you-productivity', '2024-08-07', '<p className=\"mb-4\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit\n          voluptatibus voluptatum provident, explicabo maxime officia odio nihil\n          tempora vero quod esse mollitia architecto quam officiis quia a modi\n          minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\n          blanditiis vel consequuntur amet in voluptatibus nemo quas non esse\n          vero ipsum repellat sed ea nobis nulla est corrupti animi vitae,\n          repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt\n          sit quod quis aliquam commodi, quas architecto cupiditate atque quae\n          nisi! Eum, doloremque. Beatae repellat magni praesentium omnis. Non\n          quis esse dolores soluta deserunt, voluptatibus necessitatibus, odit\n          incidunt, impedit eligendi quia.\n        </p>\n        <p className=\"mb-4\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt\n          tempora voluptate animi hic, reprehenderit quam voluptatem sed labore\n          ullam corporis laudantium illum quibusdam vitae nihil temporibus?\n          Optio dignissimos quis praesentium deserunt tempora quas excepturi!\n          Dicta, suscipit laborum? Quas animi architecto vel dignissimos atque\n          consequuntur omnis veniam dolorum, sequi recusandae rem sapiente\n          aspernatur optio voluptatum! Inventore, animi? Magnam unde quod\n          officia!\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque\n          itaque eos ducimus necessitatibus odit minus aliquid iste quae, ab\n          fugiat nobis sed amet! Nesciunt numquam, nihil rerum natus accusamus\n          officiis. Dolorem, amet, omnis vero, et ad unde ut eligendi a dicta in\n          aperiam repudiandae facilis ipsa quo repellendus similique alias!\n        </p>', '2024-10-29 10:45:58', '2024-10-29 10:45:58'),
(7, 'asian-children.jpg', 'gdfgdf', 'gdfgdfg', 'dfgdfgfd', '', 'dfgdfgdfgdf', '2024-10-29 13:47:03', '2024-10-29 13:47:03'),
(8, 'Batch-61.jpg', 'fdgfdg', 'dfgdfg', 'dfgdfgfdg', '', 'dfgdfgdfgdfg', '2024-10-29 13:47:17', '2024-10-29 13:47:17');

-- --------------------------------------------------------

--
-- Table structure for table `home_banner`
--

CREATE TABLE `home_banner` (
  `home_banner_aid` int(11) NOT NULL,
  `home_banner_sub_title` varchar(100) NOT NULL,
  `home_banner_title` varchar(100) NOT NULL,
  `home_banner_description` varchar(500) NOT NULL,
  `home_banner_button_text` varchar(50) NOT NULL,
  `home_banner_img` varchar(100) NOT NULL,
  `home_banner_created` datetime NOT NULL,
  `home_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_banner`
--

INSERT INTO `home_banner` (`home_banner_aid`, `home_banner_sub_title`, `home_banner_title`, `home_banner_description`, `home_banner_button_text`, `home_banner_img`, `home_banner_created`, `home_banner_datetime`) VALUES
(1, 'In business for good.', 'Your Trusted Christian Partner in Managed Services', 'We deliver end-to-end solutions and professional expertise in web applications, websites, virtual assistants, and skills development. Rooted in Christian values, we are committed to integrity and excellence in helping you elevate your digital presence, streamline operations, and build a more skilled workforce. Our comprehensive services are designed to drive your success with a mission to serve with purpose and care.', 'GET STARTED', 'home-bg-new.webp', '0000-00-00 00:00:00', '2024-10-26 23:49:18'),
(2, 'Custom Solutions, Lasting Growth', 'Empower your business with Custom Web Applications', 'We provide custom web application development services tailored to meet your business needs, combining robust functionality with user-friendly design. Our solutions aim to improve business efficiency and automate processes, helping you achieve your goals with modern, scalable technology.', 'GET STARTED', 'home-bg-webapp.webp', '2024-10-27 00:18:24', '2024-10-27 00:18:24'),
(3, 'Digital Design, Meaningful Engagement', 'Elevate your digital presence with responsive, user-friendly                     Websites', 'Our website services include design, development, and maintenance to ensure your digital presence is impactful and aligned with your brand. We create responsive, visually appealing, and SEO-friendly websites that enhance user experience and drive customer engagement.', 'GET STARTED', 'home-bg-va.webp', '2024-10-27 00:19:49', '2024-10-27 00:19:49'),
(4, 'Virtual Support, Real Results', 'Streamline your operations with skilled Virtual Assistants.', 'Our skilled virtual assistants offer comprehensive support to help you manage tasks and optimize daily operations. From administrative duties to customer service, we provide reliable and efficient assistance, allowing you to focus on growing your business.', 'GET STARTED', 'home-bg-va.jpg', '2024-10-27 00:21:24', '2024-10-27 00:21:24'),
(5, 'Work-Related Training, Career Success', 'Hands-on training with actual industry experience.', 'We offer structured skills development programs that equip individuals with the technical and soft skills needed in today’s workforce. Our On-the-job training and work immersion program covers web development, IT, and accounting, bridging the gap between education and employment, and empowering participants for career success.', 'GET STARTED', 'home-bg-lcs.webp', '2024-10-27 00:22:58', '2024-10-27 00:22:58');

-- --------------------------------------------------------

--
-- Table structure for table `home_insights`
--

CREATE TABLE `home_insights` (
  `home_insights_aid` int(11) NOT NULL,
  `home_insights_img` varchar(100) NOT NULL,
  `home_insights_category` varchar(200) NOT NULL,
  `home_insights_title` varchar(200) NOT NULL,
  `home_insights_slug` varchar(100) NOT NULL,
  `home_insights_date` varchar(20) NOT NULL,
  `home_insights_paragraph_a` text NOT NULL,
  `home_insights_paragraph_b` varchar(500) NOT NULL,
  `home_insights_paragraph_c` varchar(500) NOT NULL,
  `home_insights_created` datetime NOT NULL,
  `home_insights_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_insights`
--

INSERT INTO `home_insights` (`home_insights_aid`, `home_insights_img`, `home_insights_category`, `home_insights_title`, `home_insights_slug`, `home_insights_date`, `home_insights_paragraph_a`, `home_insights_paragraph_b`, `home_insights_paragraph_c`, `home_insights_created`, `home_insights_datetime`) VALUES
(3, 'vaBlog.jpg', 'Virtual Office', 'How Virtual Assistants Can Boost You Productivity', 'how-virtual-assistants-can-boost-you-productivity', '2024-10-03', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi </p>\n<p>\nminima ullam corporis deserunt. Explicabo, ut est! Minima quia autem </p>\n<p>\nblanditiis vel consequuntur amet in voluptatibus nemo quas non essevero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit q', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\nminima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non essevero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam comm', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\nminima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non essevero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam comm', '0000-00-00 00:00:00', '2024-10-25 16:38:34'),
(4, 'SkillDev.jpg', 'Web Development', '5 Reason Your Business Needs a Custom Web Application', '5-reason-your-business-needs-a-custom-web-application', '2024-10-26', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', '0000-00-00 00:00:00', '2024-10-26 21:09:22'),
(11, 'asian-children.jpg', 'Children', 'Children', 'Children-sdghsgds', '', 'sdsdsad', '', '', '2024-10-29 13:21:53', '2024-10-29 13:21:53'),
(12, 'bookkeeping-img.jpg', 'Accounting', 'Accounting ', 'Accounting sfdgsdfs', '', 'asdas er fesfcsdf ', '', '', '2024-10-29 13:22:56', '2024-10-29 13:22:56');

-- --------------------------------------------------------

--
-- Table structure for table `home_testimonial`
--

CREATE TABLE `home_testimonial` (
  `home_testimonial_aid` int(11) NOT NULL,
  `home_testimonial_message` text NOT NULL,
  `home_testimonial_name` varchar(100) NOT NULL,
  `home_testimonial_position` varchar(100) NOT NULL,
  `home_testimonial_client_img` varchar(100) NOT NULL,
  `home_testimonial_logo_img` varchar(100) NOT NULL,
  `home_testimonial_created` datetime NOT NULL,
  `home_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_testimonial`
--

INSERT INTO `home_testimonial` (`home_testimonial_aid`, `home_testimonial_message`, `home_testimonial_name`, `home_testimonial_position`, `home_testimonial_client_img`, `home_testimonial_logo_img`, `home_testimonial_created`, `home_testimonial_datetime`) VALUES
(4, 'sdsd', 'dsds', 'dsdsd', 'tm_logo.png', 'Rober_han.png', '0000-00-00 00:00:00', '2024-10-29 09:19:18'),
(5, 'Messageeeeeeeee', 'Name', 'Position', 'logo-ottm.png', 'duane_sm.png', '2024-10-29 15:24:38', '2024-10-29 15:24:38');

-- --------------------------------------------------------

--
-- Table structure for table `special_offers`
--

CREATE TABLE `special_offers` (
  `special_offers_aid` int(11) NOT NULL,
  `special_offers_icons` varchar(50) NOT NULL,
  `special_offers_services` varchar(100) NOT NULL,
  `special_offers_price` varchar(100) NOT NULL,
  `special_offers_link` varchar(100) NOT NULL,
  `special_offers_created` datetime NOT NULL,
  `special_offers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `special_offers`
--

INSERT INTO `special_offers` (`special_offers_aid`, `special_offers_icons`, `special_offers_services`, `special_offers_price`, `special_offers_link`, `special_offers_created`, `special_offers_datetime`) VALUES
(3, 'FaAddressCard', 'Business Registration', 'Startup Package', '/business-registration', '0000-00-00 00:00:00', '2024-10-28 22:32:16'),
(4, 'FaCalculator', 'sasasa', 'asasas', 'asasas', '2024-10-28 22:33:15', '2024-10-28 22:33:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events_activities`
--
ALTER TABLE `events_activities`
  ADD PRIMARY KEY (`events_activities_aid`);

--
-- Indexes for table `home_banner`
--
ALTER TABLE `home_banner`
  ADD PRIMARY KEY (`home_banner_aid`);

--
-- Indexes for table `home_insights`
--
ALTER TABLE `home_insights`
  ADD PRIMARY KEY (`home_insights_aid`);

--
-- Indexes for table `home_testimonial`
--
ALTER TABLE `home_testimonial`
  ADD PRIMARY KEY (`home_testimonial_aid`);

--
-- Indexes for table `special_offers`
--
ALTER TABLE `special_offers`
  ADD PRIMARY KEY (`special_offers_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events_activities`
--
ALTER TABLE `events_activities`
  MODIFY `events_activities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `home_banner`
--
ALTER TABLE `home_banner`
  MODIFY `home_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `home_insights`
--
ALTER TABLE `home_insights`
  MODIFY `home_insights_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `home_testimonial`
--
ALTER TABLE `home_testimonial`
  MODIFY `home_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `special_offers`
--
ALTER TABLE `special_offers`
  MODIFY `special_offers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
