import {createClient} from '@sanity/client'

const client = createClient ({
    projectId: "jknbs1zm",
    dataset: "test",
    useCdn : true,
    apiVersion: '2021-10-21'
});

export default client