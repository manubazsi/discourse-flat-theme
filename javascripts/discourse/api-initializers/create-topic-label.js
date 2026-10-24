import { apiInitializer } from "discourse/lib/api";
import { i18n } from "discourse-i18n";

export default apiInitializer(() => {
  document.documentElement.style.setProperty(
    "--mf-create-topic-label",
    JSON.stringify(i18n("topic.create"))
  );
});
