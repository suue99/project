import {createClient} from '@sanity/client'

const client = createClient ({
    projectId: "jknbs1zm",
    dataset: "test",
    useCdn : true,
});

export default client