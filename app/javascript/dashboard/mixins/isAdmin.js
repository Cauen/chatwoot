import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      currentUser: 'getCurrentUser',
      currentUserRole: 'getCurrentRole',
    }),
    isAdmin() {
      return this.currentUserRole === 'administrator';
    },
    isSuperAdmin() {
      return this.currentUser.type === 'SuperAdmin';
    },
  },
};
