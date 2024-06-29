import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      currentUser: 'getCurrentUser',
      currentUserRole: 'getCurrentRole',
    }),
    isAdmin() {
      // console.log({ currentUser: this });
      return this.currentUserRole === 'administrator';
    },
    isSuperAdmin() {
      // console.log({ currentUser: this });
      return this.currentUser.type === 'SuperAdmin';
    },
  },
};
