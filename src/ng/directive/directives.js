'use strict';

//这个方法支持了指令定义时的简写（直接传入function当做link）
function ngDirective(directive) {
  if (isFunction(directive)) {
    directive = {
      link: directive
    };
  }
  directive.restrict = directive.restrict || 'AC';
  return valueFn(directive);
}
