-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2024 at 03:14 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
-- Table structure for table `industry_testimonial`
--

CREATE TABLE `industry_testimonial` (
  `industry_testimonial_aid` int(11) NOT NULL,
  `industry_testimonial_img` varchar(100) NOT NULL,
  `industry_testimonial_logo` varchar(100) NOT NULL,
  `industry_testimonial_name` varchar(100) NOT NULL,
  `industry_testimonial_position` varchar(100) NOT NULL,
  `industry_testimonial_message` text NOT NULL,
  `industry_testimonial_category` varchar(100) NOT NULL,
  `industry_testimonial_company` varchar(100) NOT NULL,
  `industry_testimonial_created` datetime NOT NULL,
  `industry_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_testimonial`
--

INSERT INTO `industry_testimonial` (`industry_testimonial_aid`, `industry_testimonial_img`, `industry_testimonial_logo`, `industry_testimonial_name`, `industry_testimonial_position`, `industry_testimonial_message`, `industry_testimonial_category`, `industry_testimonial_company`, `industry_testimonial_created`, `industry_testimonial_datetime`) VALUES
(1, 'dennis-siano2.png', 'DTOD-BPO.png', 'Dennis Ray Siano', 'Chief Excutive Officer Owner', 'Excellent HRIS Provider with Outstanding Support!\nI started working with Frontline Business Solutions Inc. earlier this year, and so far, I’m extremely satisfied with their HRIS solutions. Their platform has streamlined our HR processes, making tasks like employee management, payroll, and reporting much more efficient. What truly stands out is the level of support we’ve received from their team.\nOur account manager has been incredibly helpful and responsive throughout the entire process, ensuring that we’re getting the most out of the system. Anytime we have questions or need assistance, they are always there to provide guidance and solutions quickly.\nOverall, I highly recommend Frontline Business Solutions Inc. for anyone looking for a reliable and supportive HRIS provider. Their service has been excellent, and their team truly understands the needs of their clients.', 'HR Information System', '', '0000-00-00 00:00:00', '2024-11-04 12:26:05'),
(2, 'kimbell-reyes.png', 'AKA-Global.png', 'Kimbell John Reyes', 'Chief Executive Officer', 'Frontline Business Solutions is indeed a partner to innovative success of a company. A connection of employer and employee. ', 'HR Information System', '', '2024-11-04 12:32:13', '2024-11-04 12:32:13'),
(3, 'alexander-ubeda.png', 'fca-logo-horizontal.png', 'Alexander Ubeda', 'School Directress', 'Frontline Business Solutions not only tailored the online enrollment system to Frontline Christian Academy\'s specific needs but also provided exceptional support, ensuring they were always available for any adjustments we required.', 'School Enrollment System', '', '2024-11-04 12:34:14', '2024-11-04 12:34:14'),
(4, 'judea-delos-santos.png', 'ftc-logo.png', 'Judea Delos Santos', 'Asst. Managing Director / Comm. & Dev. Staff', 'FBS has been an incredible partner in helping us enhance the functionality and efficiency of our FTC website. They seamlessly upgraded our backend systems, greatly improving our ability to manage donations and streamlining other critical IT requests. Their team’s professionalism, attention to detail, and commitment to supporting our mission of serving abandoned, abused, and neglected children have been invaluable. Thanks to their expertise, we are now able to operate more smoothly and efficiently, allowing us to focus on making a bigger difference for the kids we serve. We highly recommend Frontline Business Solution for any organization in need of reliable and innovative IT solutions.', 'Online Donation System', '', '2024-11-04 12:35:33', '2024-11-04 12:35:33'),
(5, 'bethany-acoba.png', 'logo-pfm.png', 'Bethany P. Acoba', 'Donor Communications and Care Coordinator', 'The online donation platform that FBS developed has enhanced our website. The process is straightforward and user-friendly, making it easy for our partners and friends from around the world to support our mission. I couldn\'t be happier with the results! ', 'Online Donation System', '', '2024-11-04 12:37:24', '2024-11-04 12:37:24'),
(6, 'lara-yedra.png', 'STMS.png', 'Lara Jane P. Yedra', 'Work Immersion Teacher', 'We extend our deepest gratitude to Frontline Business Solutions for being an outstanding partner in our Work Immersion program. Your organization provided our students with valuable, real-world experiences that greatly enhanced their skills and understanding of their chosen fields. The support and mentorship offered by your team created an ideal learning environment, fostering both professional and personal growth.                                                                                                                                                Your commitment to nurturing young talent and your willingness to involve them in meaningful projects have had a profound impact on their future careers. We truly appreciate the collaboration and look forward to more successful partnerships in the years to come.', 'High School Work Immersion', 'St. Therese Montessori School', '2024-11-04 13:13:22', '2024-11-04 13:13:22'),
(7, 'olivia-almarez.png', 'STI.png', 'Ms. Olivia Almarez', 'OJT Coordinator', 'Frontline Business Solution has been one of STI San Pablo\'s most trusted partners for several years. We at STI are truly grateful for the exceptional knowledge and experience FBS has provided to our On-the-Job trainee students in IT and Engineering, as well as for the kindness and support shown coming from the people of FBS.', 'College On-the-job- Training', 'STI San Pablo Campus', '2024-11-04 13:15:14', '2024-11-04 13:15:14'),
(8, 'angelou-almare-medina.png', 'STI.png', 'Mrs. Angelou Almare-Medina', '', 'FBS\' internship program provided great opportunity for students to experience actual industry-related tasks which greatly honed their skills. This also enhanced their professional capabilities and served as a valuable foundation for their future career.', 'College On-the-job- Training', 'STI San Pablo Campus', '2024-11-04 13:16:32', '2024-11-04 13:16:32'),
(9, 'ariel-ferrer.png', 'LSPU.png', 'Ms. Ariel Angeni Ferrer', 'BS Computer Engineering Graduate', 'My experience at Frontline Business Solution has truly been a great journey. I gained a wealth of knowledge in front-end web design, equipping me with essential skills in HTML, CSS, and JavaScript. Most importantly, the people there are truly amazing and passionate about their work. To sum it up, my experience at FBS was fun!', 'Continuing Studies', '', '2024-11-04 13:17:24', '2024-11-04 13:17:24'),
(10, 'emilio-macaso.png', 'DLSL_Official_logo.png', 'Emilio Manuel Macaso', 'IT Faculty, La Salle Lipa', 'A successful internship may be defined as one that provides the following: meaningful and relevant work, formal and informal training, social opportunities to build personal skills and relationships, and continuous connections even after the internship has ended.  The Information Technology program of De La Salle Lipa is fortunate to have found all these with the internship program of Frontline Business Solutions.  Our student interns had fulfilling internships with FBS, with their holistic approach in honing both their technical. leadership, and personal skills, and making them more ready to face the exciting world of IT.\nWe look forward to partnering with FBS to develop and nurture future-ready IT professionals.', 'College On-the-job- Training', '', '2024-11-04 13:18:31', '2024-11-04 13:18:31'),
(11, 'kevinroy-nativo.png', 'ACLC.png', 'Mr. Kevin Roy N. Oreña', 'Freelancer', 'After graduating 5 years ago, I didn\'t have the chance to apply my programming skills in my career. So, I decided to further my studies at FBS. Through FBS, I was able to refresh my existing knowledge and acquire new skills in web development, including HTML/CSS, SASS, Tailwind, Figma, WordPress, and JavaScript, which I have already been using in my freelancing career.', 'Continuing Studies', '', '2024-11-04 13:20:11', '2024-11-04 13:20:11'),
(12, 'chelsea-lim.png', 'SPC.png', 'Ms. Chelsea Lim', '', 'Frontline Business Solutions helped my students grow in every aspect. They were trained as part of the company and were really excited to tell me their stories. I saw how the company changed my students in facing problems, way of learning, discipline and understanding. I would recommend Frontline Business Solutions if you want exceptional training and experience.', 'High School Work Immersion', 'San Pablo Colleges', '2024-11-04 13:21:05', '2024-11-04 13:21:05'),
(13, 'jake-gamaro.png', 'LSPU.png', 'Jake Ansel Gamaro', 'Freelancer', 'The immersion program was incredibly beneficial for me. I loved diving into front-end web development, learning tools like Figma for prototyping and web designing, and exploring CSS with SASS and Tailwind. Getting hands-on experience with WordPress really boosted my confidence. I’m thankful for the supportive instructors and the skills I gained for my career!', 'Continuing Studies', '', '2024-11-04 13:22:35', '2024-11-04 13:22:35'),
(14, 'joesua-manzanero.png', 'LSPU.png', 'Joesua R. Manzanero', 'Faculty, Program Coordinator, BS in Information Technology  OJT Coordinator, College of Computer Stu', 'Frontline Business Solutions has demonstrated a commendable commitment to fostering the professional growth of our students through their intensive Internship programs. The hands-on experience provided during the training is invaluable, allowing students to apply theoretical knowledge in real-world settings. This practical exposure significantly enhances their readiness for the workforce.\nMoreover, Frontline offers high-end facilities equipped with the latest technology, ensuring that interns are well-prepared to meet industry standards. The emphasis on developing industry-standard competencies further underscores their dedication to producing skilled professionals who can thrive in today’s competitive landscape.\nWe appreciate Frontline Business Solutions for their partnership and commitment to the development of our students. Such opportunities are crucial in shaping the next generation of innovators in the IT and CS sector.\nThank you for your continued support.', 'College On-the-job- Training', 'Laguna State Polytechnic University- San Pablo City Campus', '2024-11-04 13:24:29', '2024-11-04 13:24:29'),
(16, 'kimbell-reyes.png', 'AKA-Global.png', 'Kimbell John Reyes', 'Chief Executive Officer', 'Frontline Business Solutions is indeed a partner to innovative success of a company. A connection of employer and employee.', 'Single Page Website', '', '2024-11-05 09:36:31', '2024-11-05 09:36:31'),
(17, 'james-sunderland.png', 'logo-ottm.png', 'James Sunderland', 'VP Creative', 'The team at Frontline is incredible. They genuinely care about our needs and share in our vision of success. We are proud to call them a business partner and appreciate all the hard work they do for us.', 'Web Design', '', '2024-11-05 09:38:31', '2024-11-05 09:38:31'),
(18, 'duane-masters.png', 'logo-world-focus.png', 'Pastor Duane Masters', 'Executive Director', 'Frontline has been an incredible organization to work with. They are friendly, accommodating, and professional, but what stands out to me the most is how responsive they are. Whenever I have a problem or request, not only have I always received a response within the day, but their team has also met my needs the same day. I’m not sure I have ever worked with an organization as responsive as they are. I would highly recommend working with them.', 'Web Design', '', '2024-11-05 09:39:52', '2024-11-05 09:39:52'),
(19, 'james-sunderland.png', 'logo-ottm.png', 'James Sunderland', 'VP Creative', 'The team at Frontline is incredible. They genuinely care about our needs and share in our vision of success. We are proud to call them a business partner and appreciate all the hard work they do for us.', 'WordPress CMS Website', '', '2024-11-05 09:41:38', '2024-11-05 09:41:38'),
(20, 'jeffrey-seitz.png', 'logo-phixgenomics.png', 'Jeffrey Seitz', 'Chief Executive Officer', 'I have worked with a number of different website developers, but none have been as responsive or as quick to turn the work around.', 'WordPress CMS Website', '', '2024-11-05 09:42:50', '2024-11-05 09:42:50'),
(21, 'rhodalynn-dayo.png', 'logo-fca.png', 'Rhoda Lynn Pessina-Dayo', 'School Directress', 'We enjoyed working together and meeting with the Frontline Business Solutions Staff when they built the website of Frontline Christian Academy.', 'WordPress CMS Website', '', '2024-11-05 09:44:01', '2024-11-05 09:44:01'),
(22, 'zymon-ramos.png', 'lc.png', 'Jinuel Zymon Ramos', 'BSCS Magna Cum Laude Batch 2023,', 'As a lifelong learner, the continuing study program at Frontline Business Solutions was truly beneficial for my own personal and professional growth. The Front-End development training was exceptional, covering HTML, CSS, and other frameworks, while also focusing on coding efficiency and dynamic web design. Grateful for the excellent trainers and well-structured training program—truly worth it.', 'Continuing Studies', 'Laguna College Alumni', '0000-00-00 00:00:00', '2024-11-05 09:50:19'),
(23, 'andrey-ilagan.png', 'plsp.png', 'Andrey Ilagan', 'BSCpE Batch 2024 Pamantasan ng Lungsod ng San Pablo', 'I\'ve gained a wealth of knowledge in web development through my experience at Frontline Business Solutions, especially their Continuing Study Program. The program’s hands-on approach and structured tutorials deepened my understanding of both front-end and back-end development. This practical learning environment encouraged continuous improvement and allowed me to confidently apply my skills to real-world projects, significantly enhancing my technical abilities. Thanks to this program, I am more confident and better equipped to handle complex web development challenges.', 'Continuing Studies', '', '2024-11-05 09:56:10', '2024-11-05 09:56:10'),
(24, 'kurt-balanial.png', 'plsp.png', 'Kurt Lui Balanial', 'BSCpE Batch 2024 Pamantasan ng Lungsod ng San Pablo', 'My training at Frontline Business Solutions was an invaluable experience that equipped me with essential skills in HTML, CSS, and Java. The supportive and professional environment made me feel empowered and ready to take on future challenges in the industry. This experience has truly prepared me for my career endeavors, leaving me more confident in my abilities.', 'Continuing Studies', '', '2024-11-05 09:57:21', '2024-11-05 09:57:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `industry_testimonial`
--
ALTER TABLE `industry_testimonial`
  ADD PRIMARY KEY (`industry_testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `industry_testimonial`
--
ALTER TABLE `industry_testimonial`
  MODIFY `industry_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
