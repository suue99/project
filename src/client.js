import {createClient} from '@sanity/client'

const client = createClient ({
    projectId: "jknbs1zm",
    dataset: "production"
});

export default client