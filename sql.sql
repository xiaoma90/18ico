/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : 

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-07-19 10:42:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for href="/home/fontnode
-- ----------------------------
DROP TABLE IF EXISTS `href="/home/fontnode`;
CREATE TABLE `href="/home/fontnode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `node_name` varchar(155) NOT NULL DEFAULT '' COMMENT '节点名称',
  `control_name` varchar(155) NOT NULL DEFAULT '' COMMENT '控制器名',
  `action_name` varchar(155) NOT NULL COMMENT '方法名',
  `is_menu` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否是菜单项 1不是 2是',
  `type_id` int(11) NOT NULL COMMENT '父级节点id',
  `style` varchar(155) DEFAULT '' COMMENT '菜单样式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of href="/home/fontnode
-- ----------------------------
INSERT INTO `href="/home/fontnode` VALUES ('1', '用户管理', '#', '#', '2', '0', 'fa fa-users');
INSERT INTO `href="/home/fontnode` VALUES ('2', '管理员管理', 'user', 'index', '2', '1', '');
INSERT INTO `href="/home/fontnode` VALUES ('3', '添加管理员', 'user', 'useradd', '1', '2', '');
INSERT INTO `href="/home/fontnode` VALUES ('4', '编辑管理员', 'user', 'useredit', '1', '2', '');
INSERT INTO `href="/home/fontnode` VALUES ('5', '删除管理员', 'user', 'userdel', '1', '2', '');
INSERT INTO `href="/home/fontnode` VALUES ('6', '角色管理', 'role', 'index', '2', '1', '');
INSERT INTO `href="/home/fontnode` VALUES ('7', '添加角色', 'role', 'roleadd', '1', '6', '');
INSERT INTO `href="/home/fontnode` VALUES ('8', '编辑角色', 'role', 'roleedit', '1', '6', '');
INSERT INTO `href="/home/fontnode` VALUES ('9', '删除角色', 'role', 'roledel', '1', '6', '');
INSERT INTO `href="/home/fontnode` VALUES ('10', '分配权限', 'role', 'giveaccess', '1', '6', '');
INSERT INTO `href="/home/fontnode` VALUES ('11', '系统管理', '#', '#', '2', '0', 'fa fa-desktop');
INSERT INTO `href="/home/fontnode` VALUES ('12', '数据备份/还原', 'data', 'index', '2', '11', '');
INSERT INTO `href="/home/fontnode` VALUES ('13', '备份数据', 'data', 'importdata', '1', '12', '');
INSERT INTO `href="/home/fontnode` VALUES ('14', '还原数据', 'data', 'backdata', '1', '12', '');
INSERT INTO `href="/home/fontnode` VALUES ('15', '节点管理', 'node', 'index', '2', '1', '');
INSERT INTO `href="/home/fontnode` VALUES ('16', '添加节点', 'node', 'nodeadd', '1', '15', '');
INSERT INTO `href="/home/fontnode` VALUES ('17', '编辑节点', 'node', 'nodeedit', '1', '15', '');
INSERT INTO `href="/home/fontnode` VALUES ('18', '删除节点', 'node', 'nodedel', '1', '15', '');

-- ----------------------------
-- Table structure for href="/home/fontrole
-- ----------------------------
DROP TABLE IF EXISTS `href="/home/fontrole`;
CREATE TABLE `href="/home/fontrole` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `role_name` varchar(155) NOT NULL COMMENT '角色名称',
  `rule` varchar(255) DEFAULT '' COMMENT '权限节点数据',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of href="/home/fontrole
-- ----------------------------
INSERT INTO `href="/home/fontrole` VALUES ('1', '超级管理员', '');
INSERT INTO `href="/home/fontrole` VALUES ('2', '系统维护员', '1,2,3,4,5,6,7,8,9,10');

-- ----------------------------
-- Table structure for href="/home/fontuser
-- ----------------------------
DROP TABLE IF EXISTS `href="/home/fontuser`;
CREATE TABLE `href="/home/fontuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '密码',
  `login_times` int(11) NOT NULL DEFAULT '0' COMMENT '登陆次数',
  `last_login_ip` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '最后登录IP',
  `last_login_time` int(11) NOT NULL DEFAULT '0' COMMENT '最后登录时间',
  `real_name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '真实姓名',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态',
  `role_id` int(11) NOT NULL DEFAULT '1' COMMENT '用户角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of href="/home/fontuser
-- ----------------------------
INSERT INTO `href="/home/fontuser` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', '35', '127.0.0.1', '1500365358', 'admin', '1', '1');
