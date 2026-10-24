import Component from "@glimmer/component";
import { service } from "@ember/service";
import { apiInitializer } from "discourse/lib/api";
import dBoundAvatarTemplate from "discourse/ui-kit/helpers/d-bound-avatar-template";

class ComposerAvatar extends Component {
  @service currentUser;

  <template>
    {{#if this.currentUser}}
      <div class="mf-composer-avatar">
        {{dBoundAvatarTemplate this.currentUser.avatar_template "large"}}
      </div>
    {{/if}}
  </template>
}

export default apiInitializer((api) => {
  api.renderInOutlet("composer-fields", ComposerAvatar);
});
