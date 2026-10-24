import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  const user = api.getCurrentUser();
  if (!user?.avatar_template) {
    return;
  }
  const url = user.avatar_template.replace("{size}", "120");
  document.documentElement.style.setProperty(
    "--mf-user-avatar",
    `url("${url}")`
  );
});
