<template>
    <section>
        <base-card>
            <h2>{{ fullname }}</h2>
            <h4>${{ rate }}/hour</h4>
        </base-card>
    </section>
    <section>
        <base-card>
            <h2>Interested ? Reach out now !!</h2>
            <base-button link :to="contactLink">Contact</base-button>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        };
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find((coach) => coach.id === this.id);
    },
    computed: {
        fullname() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        }
    }
}
</script>
