<template>
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" class="btn">Refresh</base-button>
          <base-button link to="/register">Register as a new coach</base-button>
        </div>
        <ul v-if="hasCoaches && filteredCoaches.length > 0">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          />
        </ul>
        <ul v-else>
          <li>No coaches found</li>
        </ul>
      </base-card>
    </section>
  </template>
  
  <script>
  import coachItem from "../../components/coaches/coachItem.vue";
  import coachFilter from "../../components/coaches/coachFilter.vue";
  
  export default {
    components: {
      coachItem,
      coachFilter
    },
    data() {
      return {
        activeFilter: {
          frontend: true,
          backend: true,
          career: true
        }
      };
    },
    computed: {
      filteredCoaches() {
        const coaches = this.$store.getters["coaches/coaches"];
        return coaches.filter((coach) => {
          return (
            (this.activeFilter.frontend && coach.areas.includes("frontend")) ||
            (this.activeFilter.backend && coach.areas.includes("backend")) ||
            (this.activeFilter.career && coach.areas.includes("career"))
          );
        });
      },
      hasCoaches() {
        return this.$store.getters["coaches/hasCoaches"];
      }
    },
    methods: {
      setFilter(updatedFilter) {
        this.activeFilter = updatedFilter;
      }
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
  }
  </style>
  