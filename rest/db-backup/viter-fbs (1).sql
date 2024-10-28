-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 28, 2024 at 04:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter-fbs`
--
-- --------------------------------------------------------
--
-- Table structure for table `home_banner`
--
CREATE TABLE
  `home_banner` (
    `home_banner_aid` int (11) NOT NULL,
    `home_banner_sub_title` varchar(100) NOT NULL,
    `home_banner_title` varchar(100) NOT NULL,
    `home_banner_description` varchar(500) NOT NULL,
    `home_banner_button_text` varchar(50) NOT NULL,
    `home_banner_img` varchar(100) NOT NULL,
    `home_banner_created` datetime NOT NULL,
    `home_banner_datetime` datetime NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `home_banner`
--
INSERT INTO
  `home_banner` (
    `home_banner_aid`,
    `home_banner_sub_title`,
    `home_banner_title`,
    `home_banner_description`,
    `home_banner_button_text`,
    `home_banner_img`,
    `home_banner_created`,
    `home_banner_datetime`
  )
VALUES
  (
    1,
    'In business for good.',
    'Your Trusted Christian Partner in Managed Services',
    'We deliver end-to-end solutions and professional expertise in web applications, websites, virtual assistants, and skills development. Rooted in Christian values, we are committed to integrity and excellence in helping you elevate your digital presence, streamline operations, and build a more skilled workforce. Our comprehensive services are designed to drive your success with a mission to serve with purpose and care.',
    'GET STARTED',
    'home-bg-new.webp',
    '0000-00-00 00:00:00',
    '2024-10-26 23:49:18'
  ),
  (
    2,
    'Custom Solutions, Lasting Growth',
    'Empower your business with Custom Web Applications',
    'We provide custom web application development services tailored to meet your business needs, combining robust functionality with user-friendly design. Our solutions aim to improve business efficiency and automate processes, helping you achieve your goals with modern, scalable technology.',
    'GET STARTED',
    'home-bg-webapp.webp',
    '2024-10-27 00:18:24',
    '2024-10-27 00:18:24'
  ),
  (
    3,
    'Digital Design, Meaningful Engagement',
    'Elevate your digital presence with responsive, user-friendly                     Websites',
    'Our website services include design, development, and maintenance to ensure your digital presence is impactful and aligned with your brand. We create responsive, visually appealing, and SEO-friendly websites that enhance user experience and drive customer engagement.',
    'GET STARTED',
    'home-bg-va.webp',
    '2024-10-27 00:19:49',
    '2024-10-27 00:19:49'
  ),
  (
    4,
    'Virtual Support, Real Results',
    'Streamline your operations with skilled Virtual Assistants.',
    'Our skilled virtual assistants offer comprehensive support to help you manage tasks and optimize daily operations. From administrative duties to customer service, we provide reliable and efficient assistance, allowing you to focus on growing your business.',
    'GET STARTED',
    'home-bg-va.jpg',
    '2024-10-27 00:21:24',
    '2024-10-27 00:21:24'
  ),
  (
    5,
    'Work-Related Training, Career Success',
    'Hands-on training with actual industry experience.',
    'We offer structured skills development programs that equip individuals with the technical and soft skills needed in today’s workforce. Our On-the-job training and work immersion program covers web development, IT, and accounting, bridging the gap between education and employment, and empowering participants for career success.',
    'GET STARTED',
    'home-bg-lcs.webp',
    '2024-10-27 00:22:58',
    '2024-10-27 00:22:58'
  );

-- --------------------------------------------------------
--
-- Table structure for table `home_insights`
--
CREATE TABLE
  `home_insights` (
    `home_insights_aid` int (11) NOT NULL,
    `home_insights_img` varchar(100) NOT NULL,
    `home_insights_category` varchar(200) NOT NULL,
    `home_insights_title` varchar(200) NOT NULL,
    `home_insights_slug` varchar(100) NOT NULL,
    `home_insights_date` varchar(20) NOT NULL,
    `home_insights_paragraph_a` varchar(500) NOT NULL,
    `home_insights_paragraph_b` varchar(500) NOT NULL,
    `home_insights_paragraph_c` varchar(500) NOT NULL,
    `home_insights_created` datetime NOT NULL,
    `home_insights_datetime` datetime NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `home_insights`
--
INSERT INTO
  `home_insights` (
    `home_insights_aid`,
    `home_insights_img`,
    `home_insights_category`,
    `home_insights_title`,
    `home_insights_slug`,
    `home_insights_date`,
    `home_insights_paragraph_a`,
    `home_insights_paragraph_b`,
    `home_insights_paragraph_c`,
    `home_insights_created`,
    `home_insights_datetime`
  )
VALUES
  (
    3,
    'vaBlog.jpg',
    'Virtual Office',
    'How Virtual Assistants Can Boost You Productivity',
    'how-virtual-assistants-can-boost-you-productivity',
    '2024-10-03',
    '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi </p>\n<p>\nminima ullam corporis deserunt. Explicabo, ut est! Minima quia autem </p>\n<p>\nblanditiis vel consequuntur amet in voluptatibus nemo quas non essevero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit q',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\nminima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non essevero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam comm',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\nminima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non essevero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam comm',
    '0000-00-00 00:00:00',
    '2024-10-25 16:38:34'
  ),
  (
    4,
    'SkillDev.jpg',
    'Web Development',
    '5 Reason Your Business Needs a Custom Web Application',
    '5-reason-your-business-needs-a-custom-web-application',
    '2024-10-26',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co',
    '0000-00-00 00:00:00',
    '2024-10-26 21:09:22'
  ),
  (
    8,
    'Batch-63.jpg',
    'ojt',
    'Ojt Batch',
    'ojt-batch',
    '2024-10-25',
    'ojt batch batch batch',
    '',
    '',
    '2024-10-28 21:10:09',
    '2024-10-28 21:10:09'
  ),
  (
    9,
    'asian-children.jpg',
    'Children',
    'Children',
    'children-org',
    '2024-10-25',
    'children organizations',
    '',
    '',
    '2024-10-28 21:14:03',
    '2024-10-28 21:14:03'
  );

-- --------------------------------------------------------
--
-- Table structure for table `special_offers`
--
CREATE TABLE
  `special_offers` (
    `special_offers_aid` int (11) NOT NULL,
    `special_offers_icons` varchar(50) NOT NULL,
    `special_offers_services` varchar(100) NOT NULL,
    `special_offers_price` varchar(100) NOT NULL,
    `special_offers_link` varchar(100) NOT NULL,
    `special_offers_created` datetime NOT NULL,
    `special_offers_datetime` datetime NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

--
-- Dumping data for table `special_offers`
--
INSERT INTO
  `special_offers` (
    `special_offers_aid`,
    `special_offers_icons`,
    `special_offers_services`,
    `special_offers_price`,
    `special_offers_link`,
    `special_offers_created`,
    `special_offers_datetime`
  )
VALUES
  (
    3,
    'FaAddressCard',
    'Business Registration',
    'Startup Package',
    '/business-registration',
    '0000-00-00 00:00:00',
    '2024-10-28 22:32:16'
  ),
  (
    4,
    'FaCalculator',
    'sasasa',
    'asasas',
    'asasas',
    '2024-10-28 22:33:15',
    '2024-10-28 22:33:15'
  );

--
-- Indexes for dumped tables
--
--
-- Indexes for table `home_banner`
--
ALTER TABLE `home_banner` ADD PRIMARY KEY (`home_banner_aid`);

--
-- Indexes for table `home_insights`
--
ALTER TABLE `home_insights` ADD PRIMARY KEY (`home_insights_aid`);

--
-- Indexes for table `special_offers`
--
ALTER TABLE `special_offers` ADD PRIMARY KEY (`special_offers_aid`);

--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `home_banner`
--
ALTER TABLE `home_banner` MODIFY `home_banner_aid` int (11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 6;

--
-- AUTO_INCREMENT for table `home_insights`
--
ALTER TABLE `home_insights` MODIFY `home_insights_aid` int (11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 10;

--
-- AUTO_INCREMENT for table `special_offers`
--
ALTER TABLE `special_offers` MODIFY `special_offers_aid` int (11) NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 5;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;