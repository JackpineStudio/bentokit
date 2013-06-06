-- phpMyAdmin SQL Dump
-- version 3.5.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 01, 2013 at 01:27 AM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `apps`
--

-- --------------------------------------------------------

--
-- Table structure for table `apps`
--

CREATE TABLE `apps` (
  `app_name` varchar(255) NOT NULL,
  `app_link` varchar(255) NOT NULL,
  `app_icon` varchar(255) NOT NULL,
  `class1` varchar(255) NOT NULL,
  `class2` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apps`
--

INSERT INTO `apps` (`app_name`, `app_link`, `app_icon`, `class1`, `class2`) VALUES
('3D CSS Text', 'http://www.3dcsstext.com/', 'appbookmark-3d.png', 'css3', NULL),
('@font-face Generator', 'http://www.fontsquirrel.com/fontface/generator', 'appbookmark-fontkitgenerator.png', 'css3', 'typography'),
('Adobe Kuler', 'https://kuler.adobe.com/', 'appbookmark-kuler.png', 'color', NULL),
('animatable', 'http://leaverou.github.com/animatable/', 'appbookmark-animatable.png', 'css3', 'animation'),
('Animate.css', 'http://daneden.me/animate/', 'appbookmark-animatecss.png', 'css3', 'animation'),
('ArcText.js', 'http://tympanus.net/Development/Arctext/', 'appbookmark-arc.jpg', 'jquery', 'typography'),
('Baseline', 'http://www.baselinecss.com/', 'appbookmark-baseline.png', 'typography', 'framework'),
('Bee CSS', 'http://beecss.theextremewebdesigns.com/', 'appbookmark-bee.png', 'css3', NULL),
('Bootstrap', 'http://twitter.github.com/bootstrap/', 'appbookmark-bootstrap.png', 'html5', 'framework'),
('border-radius', 'http://border-radius.com/', 'appbookmark-borderradius.png', 'css3', NULL),
('Brackets', 'http://brackets.io/', 'appbookmark-brackets.png', 'html5', 'editor'),
('Brand Colors', 'http://brandcolors.net/', 'appbookmark-bc.png', 'css3', 'color'),
('Button Maker', 'http://css-tricks.com/examples/ButtonMaker/', 'appbookmark-button.png', 'css3', NULL),
('Codepen', 'http://codepen.io/pen', 'appbookmark-codepen.png', 'html5', 'editor'),
('Color Oracle', 'http://colororacle.org/', 'appbookmark-colororacle.png', 'color', 'design'),
('Color Scheme Designer', 'http://colorschemedesigner.com/', 'appbookmark-colorscheme.jpg', 'color', NULL),
('ColorRotate', 'http://web.colorotate.org/', 'appbookmark-colorotate.jpg', 'color', NULL),
('Colour Lovers', 'http://www.colourlovers.com/', 'appbookmark-colourlover.png', 'color', NULL),
('CSS Arrow Please', 'http://cssarrowplease.com/', 'appbookmark-cssarrow.png', 'css3', NULL),
('CSS Load', 'http://cssload.net/', 'appbookmark-cssload.png', 'css3', NULL),
('CSS3 Generator', 'http://css3generator.com/', 'appbookmark-css3generator.png', 'css3', NULL),
('CSS3 Maker', 'http://www.css3maker.com/', 'appbookmark-css3maker.png', 'css3', 'animation'),
('CSS3 Patterns', 'http://lea.verou.me/css3patterns/', 'appbookmark-csspattern.png', 'css3', NULL),
('CSS3 Rotation', 'https://developer.cdn.mozilla.net/media/uploads/demos/a/l/alejo_moz/aa728b1caa4a6eb5766f6e580543758a/css3-rotations-gener_1356868985_demo_package/index.html', 'appbookmark-divrotate.png', 'css3', NULL),
('cubic-bezier', 'http://cubic-bezier.com/', 'appbookmark-cubicbezier.png', 'css3', 'animation'),
('Drupal', 'http://drupal.org/download', 'appbookmark-drupal.png', 'cms', NULL),
('Estimator by Astuteo', 'http://astuteo.com/estimator/', 'appbookmark-estimator.png', 'utility', NULL),
('FitText', 'http://fittextjs.com/', 'appbookmark-fittext.png', 'jquery', 'typography'),
('Flatstrap', 'http://littlesparkvt.com/flatstrap/index.html', 'appbookmark-flatstrap.png', 'html5', 'framework'),
('Flex Slider', 'http://astuteo.com/estimator/', 'appbookmark-flex.png', 'jquery', 'css3'),
('Font Constructor', 'http://www.fontconstructor.com/download/index.html', 'appbookmark-fontconstructor.png', 'editor', 'typography'),
('FontAwesome', 'http://fortawesome.github.com/Font-Awesome/', 'appbookmark-fontawesome.png', 'typography', 'framework'),
('Fontstruct', 'http://fontstruct.com/sign_in/fontstructor', 'appbookmark-fontstruct.png', 'editor ', 'typography'),
('Foundation', 'http://foundation.zurb.com/', 'appbookmark-foundation.png', 'html5', 'framework'),
('GIMP', 'http://www.gimp.org/downloads/', 'appbookmark-gimp.png', 'design', 'editor'),
('Google Web Fonts', 'http://www.google.com/webfonts', 'appbookmark-webfonts.png', 'css3', 'typography'),
('Grid-A-Licious', 'http://suprb.com/apps/gridalicious/', 'appbookmark-gridalicious.png', 'jquery', NULL),
('GuideGuide', 'http://guideguide.me/', 'appbookmark-guideguide.png', 'design', NULL),
('HTML5 Boilerplate', 'http://html5boilerplate.com/', 'appbookmark-html5boilerplate.png', 'html5', 'framework'),
('iBooks Author', 'https://itunes.apple.com/us/app/ibooks-author/id490152466?ls=1&mt=12', 'appbookmark-ibookauthor.png', 'design', 'editor'),
('ImageOptim', 'http://imageoptim.com/', 'appbookmark-imageoptim.png', 'design', 'utility'),
('Inkscape', 'http://inkscape.org/download/?lang=en', 'appbookmark-inkscape.png', 'design', 'editor'),
('jQuery UI', 'http://jqueryui.com/', 'appbookmark-jqueryui.png', 'jquery', 'framework'),
('Js Fiddle', 'http://jsfiddle.net/', 'appbookmark-jsfiddle.png', 'editor', 'html5'),
('Komodo Edit', 'http://www.activestate.com/komodo-edit/downloads', 'appbookmark-komodo.png', 'html5', 'editor'),
('Layer Styles', 'http://layerstyles.org/', 'appbookmark-layerstyles.png', 'css3', NULL),
('Lettering.js', 'http://letteringjs.com/', 'appbookmark-lettering.png', 'jquery', 'typography'),
('MindNode Lite', 'https://itunes.apple.com/ca/app/mindnode-lite/id402397683?mt=12', 'appbookmark-mindnode.png', 'utility', NULL),
('Notepad++', 'http://notepad-plus-plus.org/download/', 'appbookmark-notepad.png', 'html5', 'editor'),
('PSD Covers', 'http://www.psdcovers.com/', 'appbookmark-psdcovers.png', 'design', NULL),
('Raptor Editor', 'http://www.raptor-editor.com/', 'appbookmark-raptor.png', 'html5', 'editor'),
('Sass.', 'http://sass-lang.com/', 'appbookmark-sass.png', 'css3', 'framework'),
('slabText.js', 'http://www.frequency-decoder.com/demo/slabText/', 'appbookmark-slabtext.png', 'jquery', 'typography'),
('Subtle Patterns', 'http://subtlepatterns.com/', 'appbookmark-subtle.png', 'design', NULL),
('Sumo Paint', 'http://www.sumopaint.com/app/', 'appbookmark-sumopaint.png', 'design', 'editor'),
('Ultimate CSS Gradient', 'http://www.colorzilla.com/gradient-editor/', 'appbookmark-cssgradient.png', 'color', 'css3'),
('Weebly', 'http://www.weebly.com/', 'appbookmark-weebly.png', 'cms', NULL),
('WhatTheFont', 'http://www.myfonts.com/WhatTheFont/', 'appbookmark-whatthefont.png', 'typography', NULL),
('wireframe.cc', 'http://wireframe.cc/', 'appbookmark-wireframe.png', 'utility', 'editor'),
('Wordmark it!', 'http://wordmark.it/', 'appbookmark-wordmarkit.png', 'typography', NULL),
('Wordpress', 'http://wordpress.org/download/', 'appbookmark-wordpress.png', 'cms', NULL),
('x-icon editor', 'http://www.xiconeditor.com/', 'appbookmark-xicon.png', 'design', 'editor'),
('{less}', 'http://lesscss.org/', 'appbookmark-less.png', 'css3', 'framework');
