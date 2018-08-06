SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `customerDB` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `surname` varchar(200) NOT NULL,
  `plateid` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;



INSERT INTO `customerDB` (`id`, `name`, `surname`, `plateid`) VALUES
(1, 'Petras', 'Petraitis', 'MNC111'),
(2, 'Jonas', 'Jonaitis', 'ABC222'),
(3, 'Dar', 'Vienas', 'LLL888'),
(4, 'Dar', 'kitas', 'BBD111');


