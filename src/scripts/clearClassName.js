
export default function clearClassName(className, deletedClass) {
  let classArray = [];
  let savedClassName = className;

  classArray = className.split(deletedClass);

  if (classArray.length > 0) return classArray.join(" ");

  return savedClassName
}