-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 02:23 PM
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
(8, 'Batch-61.jpg', 'fdgfdg', 'dfgdfg', 'dfgdfgfdg', '', 'dfgdfgdfgdfg', '2024-10-29 13:47:17', '2024-10-29 13:47:17'),
(9, 'business-reg-img.jpg', 'Accounting ', 'Business Registration', 'business-reg', '2024-10-05', 'sasasa asasssssssssssssssssssssss saaaaaaa', '2024-10-29 20:26:33', '2024-10-29 20:26:33'),
(10, 'Batch-61.jpg', 'Work Immersion', 'Batch - 031', 'work-immersion', '2024-09-03', 'sffdsfsdfs sdfsdfsd dsfsdfdsf sdfsdfsdf sdfsdfsdfsd ', '2024-10-29 20:27:44', '2024-10-29 20:27:44'),
(11, 'learning.jpg', 'Continuing Study', 'OJT', 'ojt', '2024-05-29', 'asdasdasdas sad as', '2024-10-29 20:28:42', '2024-10-29 20:28:42');

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
(4, 'virtual-assistant.jpg', 'Virtual Assistant', 'Maximizing Productivity with Virtual Assistant Services: Your Secret to Streamlining Success', 'maximizing-productivity-with-virtual-assistant-services', '2024-10-26', '<p>\n  In today’s fast-paced business world, time is very precious. The demand to\n  juggle multiple tasks can be overwhelming and can take so much of your time.\n  This relentless multitasking not only drains energy but also reduces overall\n  productivity.\n</p>\n\n<p>\n  Sarah Harris, who handles Customer Support Requests at Workast, shared eight\n  powerful ways a virtual assistant can significantly boost your productivity.\n  By delegating routine tasks to a skilled VA, you can reclaim your time and\n  focus on what truly matters—growing your business and enhancing your core\n  operations.\n</p>\n\n<p>\n  Let’s dive into those ways and explore how a virtual assistant can be the\n  game-changer you’ve been looking for!\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Enhanced Task Organization</strong>\n    <p>\n      Your company’s productivity depends on how well your tasks are organized.\n      When your tasks and schedules are structured properly, you’ll encounter\n      fewer problems and experience smoother operations.\n    </p>\n    <p>\n      Virtual assistants can help you stay on top of your tasks by keeping your\n      to-do list organized and ensuring business processes are streamlined. By\n      taking on responsibilities like answering customer queries, handling email\n      management, or handling social media posts, Virtual Assistants allow you\n      to focus on growing your business. With a Virtual Assistant, you’ll be\n      able to run your operations and set priorities without any distractions.\n    </p>\n  </li>\n  <li>\n    <strong>2. Better Time Management</strong>\n    <p>\n      Running a business often means juggling numerous tasks, and before you\n      know it, your entire day fills up quickly. It can be hard to remember\n      everything.\n    </p>\n    <p>\n      This is where Virtual Assistants would be beneficial to you. They can do\n      scheduling appointments, keep you on track for meetings, and ensure you\n      meet all your deadlines.\n    </p>\n  </li>\n  <li>\n    <strong>3. Avoiding Multitasking</strong>\n    <p>\n      Multitasking is often seen as a valuable skill, but studies show it can\n      lower productivity. We are not designed to juggle multiple tasks\n      simultaneously. Instead, focusing on one task at a time gives clearer\n      thinking and better solutions.\n    </p>\n    <p>\n      With the help of Virtual Assistant, they can reduce the pressure to\n      multitask, allowing you to focus on what truly matters. With their\n      support, you can prioritize important projects, avoid distractions, and\n      enhance your productivity.\n    </p>\n  </li>\n  <li>\n    <strong>4. Can take more breaks</strong>\n    <p>\n      Taking regular breaks can boost productivity. Continuously working without\n      breaks leads to burnout and decreased focus which can result in poor\n      productivity.\n    </p>\n    <p>\n      With a VA handling certain tasks for you, while you take a break, you\n      won’t have to worry about your deadlines. Whether it’s a quick coffee or\n      even a short meditation, breaks keep you mentally refreshed and ready to\n      tackle your work with renewed energy.\n    </p>\n  </li>\n  <li>\n    <strong>5. Reducing Distractions, Increasing Output</strong>\n    <p>\n      Common workplace distractions, can eat up valuable time and reduce\n      productivity. Once distracted, it’s often hard to get back on track, and\n      the \"restart\" process can lower the quality of your work.\n    </p>\n    <p>\n      Virtual assistants work in focused, distraction-free environments,\n      allowing them to complete tasks efficiently and effectively. With fewer\n      distractions in their work setting, VAs can manage their time better,\n      increasing their overall productivity without interruptions.\n    </p>\n  </li>\n  <li>\n    <strong>6. Specialized Expertise</strong>\n    <p>\n      As an entrepreneur, you might want to master every aspect of your\n      business, but that’s simply not feasible. Virtual assistants handle a\n      range of tasks with skill and efficiency.\n    </p>\n    <p>\n      From content creation to bookkeeping, VAs are equipped to take on\n      repetitive or specialized tasks, often completing them faster due to their\n      familiarity and experience. This allows your business to run more\n      smoothly, as tasks are handled by experts, freeing you up to focus on\n      areas where your skills shine.\n    </p>\n  </li>\n  <li>\n    <strong>7. Filtering Communication</strong>\n    <p>\n      Not every message or notification you receive requires your immediate\n      attention. Many messages can be quickly responded to or ignored. A virtual\n      assistant can help manage your inbox and communication channels, filtering\n      out unnecessary messages and ensuring that only the most important\n      messages reach you.\n    </p>\n    <p>\n      By having your VA handle the routine communications, you can focus on the\n      conversations that truly matter.\n    </p>\n  </li>\n  <li>\n    <strong>8. Focus on What You Do Best</strong>\n    <p>\n      Most business owners have a core area of expertise. However, in the early\n      stages of running a business, you may also need to tackle other tasks such\n      as customer support, bookkeeping, or managing social media, which might\n      not be your strengths.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Outsourcing these tasks to a virtual assistant allows you to focus on what you\n  do best. You can rely on your VA to manage the tasks you find challenging or\n  time-consuming, ensuring they’re done expertly and efficiently.\n</p>\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', '0000-00-00 00:00:00', '2024-10-26 21:09:22'),
(8, 'web-developer-2.jpg', 'Web Development', 'Why website maintenance is crucial for any business', 'why-website-maintenance-is-crucial-for-any-business', '2024-10-25', '<p>\n  A website is one of the most important marketing tools\n  for any business. It is a powerful tool for engaging with customers and\n  driving growth. Website maintenance entails regularly updating a site’s\n  software, content, and security measures. Failing to maintain a website can\n  result in issues like slow load times, broken links, security risks, and\n  decreased search engine rankings.\n</p>\n\n<p>\n  Mirza Hadi Baig, a Full Stack Developer and Shopify Developer, shared her\n  insights on why website maintenance is crucial for any business. Let’s dive\n  into those reasons and uncover why consistent website maintenance is a must\n  for any business.\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Security</strong>\n    <p>\n      With the increasing number of cyber-attacks, website security is more\n      critical than ever. A website not regularly maintained is vulnerable to\n      hacking, malware, and other security breaches. Regular website\n      maintenance, such as updating software and security features, can help\n      prevent these attacks and protect your customers\' data.\n    </p>\n  </li>\n  <li>\n    <strong>2. Performance:</strong>\n    <p>\n      A slow-loading website can significantly impact the user experience,\n      leading to high bounce and decreased conversion rates. Regular website\n      maintenance can help to identify and fix issues that affect website\n      performance, such as broken links, outdated plugins, and unoptimized\n      images.\n    </p>\n    <p>\n      This is where Virtual Assistants would be beneficial to you. They can do\n      scheduling appointments, keep you on track for meetings, and ensure you\n      meet all your deadlines.\n    </p>\n  </li>\n  <li>\n    <strong>3. Search engine optimization (SEO):</strong>\n    <p>\n      Search engines regularly update their algorithms, and a website that is\n      not regularly maintained may be penalized in search engine rankings.\n      Regular website maintenance can help to keep the website up-to-date with\n      the latest SEO practices, ensuring that it ranks higher in search engine\n      results pages.\n    </p>\n  </li>\n  <li>\n    <strong>4. Brand image:</strong>\n    <p>\n      A well-maintained website creates a positive brand image for a business.\n      It shows that the business is professional, up-to-date, and cares about\n      its customers. On the other hand, a poorly maintained website can make a\n      business appear unprofessional and untrustworthy.\n    </p>\n  </li>\n  <li>\n    <strong>5. Cost-effective:</strong>\n    <p>\n      Regular website maintenance can prevent major issues from occurring, which\n      can be costly to fix. Investing in regular maintenance can save businesses\n      money in the long run by preventing major issues from occurring.\n    </p>\n  </li>\n  <li>\n    <strong>6. Regularly back up your website</strong>\n    <p>\n      Backing up your website regularly is an essential part of website\n      maintenance. It ensures that your website data is safe in case of any\n      unforeseen events, such as a server crash or hacking. You can use\n      automated backup tools or perform manual backups regularly.\n    </p>\n  </li>\n  <li>\n    <strong>7. Update website content:</strong>\n    <p>\n      Regularly updating your website content not only keeps your website fresh\n      but also helps with SEO. Add new blog posts, update product descriptions,\n      and add new images and videos to keep your website engaging and\n      up-to-date.\n    </p>\n  </li>\n  <li>\n    <strong>8. Monitor website analytics</strong>\n    <p>\n      Website analytics provide valuable insights into your website\'s\n      performance, such as traffic sources, user behavior, and conversion rates.\n      Regularly monitor your website analytics using tools such as Google\n      Analytics and use the data to optimize your website for better\n      performance.\n    </p>\n  </li>\n  <li>\n    <strong>9. Keep software up-to-date:</strong>\n    <p>\n      Keeping your website software up-to-date is crucial for security and\n      performance. Regularly update your content management system (CMS),\n      plugins, and themes to the latest version. However, be cautious when\n      updating and testing updates in a staging environment before applying them\n      to the live site.\n    </p>\n  </li>\n  <li>\n    <strong>10. Conduct regular security checks:</strong>\n    <p>\n      Regularly check your website for security vulnerabilities and malware\n      using tools such as Sucuri, Wordfence, or SiteLock. Set up security alerts\n      to be notified of any suspicious activity on your website.\n    </p>\n  </li>\n  <li>\n    <strong>11. Test website functionality:</strong>\n    <p>\n      Regularly test your website functionality to ensure that all links, forms,\n      and other features are working correctly. Fix any issues that may be\n      affecting user experience or lead to a drop in search engine rankings.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Regular website maintenance is essential for any business that wants to stay\n  competitive, secure, and relevant in today’s digital landscape. A\n  well-maintained website not only protects your business and customers from\n  potential security risks but also enhances the user experience, improves\n  search engine rankings, and strengthens your brand image. Proactive\n  maintenance saves time and resources by preventing costly issues down the\n  line, ultimately leading to greater efficiency and customer satisfaction. By\n  investing in routine maintenance, businesses ensure that their websites remain\n  valuable assets, driving growth and engagement in a fast-paced online\n  environment.\n</p>\n', '', '', '0000-00-00 00:00:00', '2024-10-28 21:10:09'),
(9, 'learning.jpg', 'Skills Development', 'Soft Skills that Set Students Apart', 'soft-skills-thats-set-students-apart', '2024-10-25', '<p>\n  Technical skills are essential for students, enabling individuals and\n  businesses to adapt to evolving technological advancements. However, technical\n  skills alone are not enough. A balance of technical and soft skills is crucial\n  for the long-term success and growth of both individuals and businesses.\n</p>\n\n<p>\n  In a blog written by ESEI Barcelona, they discuss the importance of soft\n  skills in today’s job market, emphasizing that technical skills alone are\n  insufficient for career success.\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Communication Skills</strong>\n    <p>\n      Effective communication is the cornerstone of success in any field. It\n      involves listening attentively, articulating ideas clearly, and adapting\n      communication styles to different audiences. Strong communication skills\n      foster better teamwork, collaboration, and customer relations. Enhancing\n      your verbal and written communication abilities will enable you to convey\n      your thoughts concisely and influence others positively.\n    </p>\n  </li>\n  <li>\n    <strong>2. Emotional Intelligence</strong>\n    <p>\n      Emotional intelligence (EI) refers to the capacity to recognize and manage\n      emotions, both in oneself and others. It involves empathy, self-awareness,\n      and the ability to handle interpersonal relationships with tact and\n      sensitivity. High EI enables you to navigate conflicts, handle pressure,\n      and build strong connections with colleagues, clients, and superiors.\n      Developing emotional intelligence allows you to become an effective leader\n      and fosters a positive work environment. This is a very important skill to\n      have when it comes to project-based learning, as you are working with\n      people with different characteristics than you!\n    </p>\n  </li>\n  <li>\n    <strong>3. Adaptability</strong>\n    <p>\n      In today’s dynamic workplaces, adaptability is crucial. It is the ability\n      to respond positively to changing circumstances, learn new skills, and\n      embrace innovation. Those who can quickly adapt to new technologies,\n      procedures, and work environments are highly valued. Being adaptable\n      demonstrates your willingness to embrace challenges, think creatively, and\n      continuously improve. By staying flexible, you position yourself as a\n      valuable asset to your organization.\n    </p>\n  </li>\n  <li>\n    <strong>4. Problem-Solving Skills</strong>\n    <p>\n      Problem-solving skills involve the ability to analyze complex situations,\n      identify solutions, and make sound decisions. Effective problem solvers\n      are resourceful, logical, and proactive. They can think critically,\n      evaluate options, and implement strategies to overcome obstacles.\n      Enhancing your problem-solving abilities allows you to approach challenges\n      with confidence and contribute innovative ideas to your organization.\n    </p>\n  </li>\n  <li>\n    <strong>5. Leadership Skills</strong>\n    <p>\n      Leadership skills extend beyond managerial roles. Leadership involves\n      motivating, inspiring, and influencing others to achieve common goals.\n      Whether you’re leading a team or taking initiative within a project,\n      strong leadership skills are essential. Effective leaders demonstrate\n      strong communication, decision-making, and problem-solving skills while\n      fostering collaboration and trust. Developing leadership abilities helps\n      you stand out and paves the way for career advancement.\n    </p>\n  </li>\n  <li>\n    <strong>6. Teamwork and Collaboration</strong>\n    <p>\n      In today’s interconnected workplaces, the ability to work well with others\n      is vital. Collaboration entails actively engaging with team members,\n      respecting diverse perspectives, and contributing to collective success.\n      It involves effective communication, empathy, and the willingness to\n      compromise. Being a team player demonstrates your commitment to\n      organizational goals and your ability to create harmonious working\n      relationships.\n    </p>\n  </li>\n  <li>\n    <strong>7. Time Management and Organization</strong>\n    <p>\n      Time management and organizational skills are fundamental for productivity\n      and success. Effectively managing your time allows you to prioritize\n      tasks, meet deadlines, and maintain a healthy work-life balance. Being\n      organized involves maintaining a tidy workspace, managing information\n      efficiently, and planning ahead. By honing your time management and\n      organizational abilities, you can increase your efficiency, reduce stress,\n      and improve your overall performance.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Mastering these seven soft skills—communication, emotional intelligence,\n  adaptability, problem-solving, leadership, teamwork, and time management—will\n  undoubtedly accelerate your career growth. While technical expertise is\n  crucial, these skills differentiate outstanding professionals from the rest.\n  Cultivating these abilities enhances your effectiveness, strengthens\n  professional relationships, and positions you as an invaluable asset within\n  your organization. Embrace the opportunity to develop these soft skills, and\n  you’ll be well on your way to achieving long-term career success\n</p>\n', '', '', '0000-00-00 00:00:00', '2024-10-28 21:14:03');

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
(3, 'FaAddressCard', 'Business Registration', 'Startup Package', '/business-registration', '0000-00-00 00:00:00', '2024-10-28 22:32:16');

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
  MODIFY `events_activities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `home_banner`
--
ALTER TABLE `home_banner`
  MODIFY `home_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `home_insights`
--
ALTER TABLE `home_insights`
  MODIFY `home_insights_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `home_testimonial`
--
ALTER TABLE `home_testimonial`
  MODIFY `home_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `special_offers`
--
ALTER TABLE `special_offers`
  MODIFY `special_offers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
