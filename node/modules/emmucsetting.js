'use strict';

const easemobNode = require('./../load');

/**
 * Easemob EMMucSetting implementation.
 * {
 * PRIVATE_OWNER_INVITE = 0(defaule),  //Private group, only group owner can invite user to the group
 * PRIVATE_MEMBER_INVITE = 1,          //Private group, both group owner and members can invite user to the group
 * PUBLIC_JOIN_APPROVAL = 2,           //Public group, user can apply to join the group, but need group owner's approval, and owner can invite user to the group
 * PUBLIC_JOIN_OPEN = 3                //Public group, any user can freely join the group, and owner can invite user to the group
 * }
 */

/**
 * EMMucSetting constructor.
 * @constructor
 * @param {Number} style 群组类型
 * @param {Number} maxUserCount  最大人数
 * @param {Bool} inviteNeedConfirm 邀请进群是否需要确认
 * @param {String} extension 扩展信息
 */
function EMMucSetting(style, maxUserCount, inviteNeedConfirm, extension) {
  if (typeof(style) == "object") {
    this._setting = style;
  } else {
    this._setting = new easemobNode.EMMucSetting(style, maxUserCount, inviteNeedConfirm, extension);
  }
}

/**
 * Set muc setting style.
 * @param {Number} style 群组类型
 * @return {void}
 */
EMMucSetting.prototype.setStyle = function (style) {
  this._setting.setStyle(style);
};

/**
 * Get muc setting style.
 * @return {Number} 返回群组类型
 */
EMMucSetting.prototype.style = function () {
  return this._setting.style();
};

/**
 * Set muc max user count.
 * @param {Number} maxUserCount 群组最大人数
 * @return {void}
 */
EMMucSetting.prototype.setMaxUserCount = function (maxUserCount) {
  this._setting.setMaxUserCount(maxUserCount);
};

/**
 * Get muc max user count.
 * @return {Number} 返回群组最大人数
 */
EMMucSetting.prototype.maxUserCount = function () {
  return this._setting.maxUserCount();
};

/**
 * Set muc max user count.
 * @param {Bool} inviteNeedConfirm 邀请成员是否需要确认
 * @return {void}
 */
EMMucSetting.prototype.setInviteNeedConfirm = function (inviteNeedConfirm) {
  this._setting.setInviteNeedConfirm(inviteNeedConfirm);
};

/**
 * Get muc max user count.
 * @return {Bool} 返回邀请成员是否需要确认
 */
EMMucSetting.prototype.inviteNeedConfirm = function () {
  return this._setting.inviteNeedConfirm();
};

/**
 * Set muc max user count.
 * @param {String} extension 扩展信息
 * @return {void}
 */
EMMucSetting.prototype.setExtension = function (extension) {
  this._setting.setExtension(extension)
};

/**
 * Get muc max user count.
 * @return {String} 返回扩展信息
 */
EMMucSetting.prototype.extension = function () {
  return this._setting.extension();
};

module.exports = EMMucSetting;