export type ObjectClassesType = Record<string, string | boolean>;

export function classNames(
  clsx: string = "",
  ObjectClasses: ObjectClassesType = {},
  ArrayClasses: string[] = []
): string {
  const array = [
    clsx,
    ...Object.entries(ObjectClasses)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...ArrayClasses.filter(Boolean),
  ].filter(Boolean);
  return array.join(" ");
}
