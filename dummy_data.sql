-- Dummy data for Issues table
-- Run this SQL in your MySQL database

INSERT INTO `Issue` (`title`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
('Fix login authentication bug', 'Users are unable to log in with correct credentials. The authentication system is not validating passwords properly.', 'OPEN', '2024-01-15 09:30:00', '2024-01-15 09:30:00'),
('Implement user dashboard', 'Create a comprehensive dashboard for users to view their profile, settings, and activity history.', 'IN_PROGRESS', '2024-01-16 14:20:00', '2024-01-20 16:45:00'),
('Add email notifications', 'Set up email notification system for important events like password changes and security alerts.', 'CLOSED', '2024-01-10 11:15:00', '2024-01-18 13:30:00'),
('Optimize database queries', 'Database performance is slow. Need to optimize queries and add proper indexing for better response times.', 'OPEN', '2024-01-22 08:45:00', '2024-01-22 08:45:00'),
('Create mobile responsive design', 'The website is not mobile-friendly. Need to implement responsive design for better user experience on mobile devices.', 'IN_PROGRESS', '2024-01-18 10:30:00', '2024-01-21 15:20:00'),
('Fix payment processing error', 'Payment gateway is returning errors for credit card transactions. Need to investigate and fix the integration.', 'OPEN', '2024-01-23 12:00:00', '2024-01-23 12:00:00'),
('Add dark mode feature', 'Implement dark mode toggle for better user experience and accessibility.', 'CLOSED', '2024-01-12 16:20:00', '2024-01-19 11:45:00'),
('Update API documentation', 'Current API documentation is outdated. Need to update with latest endpoints and examples.', 'OPEN', '2024-01-24 09:15:00', '2024-01-24 09:15:00'),
('Implement file upload feature', 'Add ability for users to upload and manage files in their accounts.', 'IN_PROGRESS', '2024-01-19 13:40:00', '2024-01-22 17:10:00'),
('Fix search functionality', 'Search results are not accurate and sometimes return irrelevant data. Need to improve search algorithm.', 'OPEN', '2024-01-25 10:30:00', '2024-01-25 10:30:00'),
('Add two-factor authentication', 'Implement 2FA for enhanced security using SMS or authenticator apps.', 'CLOSED', '2024-01-14 14:50:00', '2024-01-17 09:25:00'),
('Create admin panel', 'Build an administrative interface for managing users, content, and system settings.', 'IN_PROGRESS', '2024-01-20 11:20:00', '2024-01-23 14:35:00'),
('Fix image loading issues', 'Images are not loading properly on certain browsers and devices.', 'OPEN', '2024-01-26 15:45:00', '2024-01-26 15:45:00'),
('Implement data export feature', 'Allow users to export their data in various formats (CSV, JSON, PDF).', 'CLOSED', '2024-01-13 12:30:00', '2024-01-16 16:40:00'),
('Add real-time notifications', 'Implement WebSocket connection for real-time notifications and updates.', 'IN_PROGRESS', '2024-01-21 08:30:00', '2024-01-24 12:15:00'),
('Fix timezone display issues', 'Dates and times are showing in wrong timezones across the application.', 'OPEN', '2024-01-27 13:20:00', '2024-01-27 13:20:00'),
('Create user onboarding flow', 'Design and implement a smooth onboarding experience for new users.', 'CLOSED', '2024-01-11 10:45:00', '2024-01-15 14:20:00'),
('Add social media integration', 'Allow users to share content and login using social media accounts.', 'IN_PROGRESS', '2024-01-22 16:10:00', '2024-01-25 11:30:00'),
('Fix memory leak in application', 'Application is consuming excessive memory over time, causing performance degradation.', 'OPEN', '2024-01-28 09:50:00', '2024-01-28 09:50:00'),
('Implement backup system', 'Create automated backup system for user data and system configurations.', 'CLOSED', '2024-01-09 15:30:00', '2024-01-14 10:15:00'); 