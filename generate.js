module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    var gender = ['Male', 'Female'];
    var some_states = ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "VA"];
    var media = ['Facebook', 'Twitter', 'Instagram', 'Pinterest', 'Snapchat', 'WordPress', 'YouTube'];
    var numeralia = ['followers', 'visits', 'subscribers', 'likes', 'posts per day', 'posts per week'];
    var tags = ['Sports', 'Mom', 'Yoga', 'Tech', 'Funny', 'VideoGames', 'Health', 'School', 'Programming', 'SocialLife', 'Psychology', 'Basketball', 'Yoga', 'UFC', 'Music', 'Movies', 'Fashion', 'StarWars', 'Batman', 'Comics', 'Photography', 'Travel', 'Architecture'];
    var max = 45;
    var min = 18;
    var package_types = ['Basic','Standard','Premium'];
    return {
        people: _.times(50, function (n) {
            return {
                id: n,
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                created_on: faker.date.past(),
                last_access_on: faker.date.past(),
                role: 'user',
                banned: faker.random.boolean(),
                banned_since: faker.date.past(),
                comments_internal: faker.lorem.sentence(),
                pitch: faker.lorem.paragraphs(),
                description: '<p>Krusty the Clown: Kids, we need to talk for a moment about Krusty Brand Chew Goo Gum Like Substance. We all knew it contained spider eggs, but the hanta virus? That came out of left field. So if you\'re experiencing numbness and/or comas, send five dollars to antidote, PO box...  [gets interrupted by a newscast]</p><p>Marge: Homer, it\'s easy to criticize.  Homer: Fun, too.</p><p>Private detective: Where\'s principal Skinner\'s office?  Groundskeeper Willie: Wait a minute. You can\'t just walk in there.  Private detective: You know, you\'re the spitting image of the Aberdeen strangler. Groundskeeper Willie: Carry on.  [leaves, whistling]</p><p>[repeated line]  Mr. Burns: Excellent.</p>',
                //'faker.lorem.paragraphs(),
                profile: faker.lorem.word(),
                country: 'USA',
                city: faker.address.city(),
                state: some_states[Math.floor(Math.random() * some_states.length)],
                zip_code: faker.address.zipCode(),
                dob: faker.date.past(),
                age: Math.floor(Math.random() * (max - min) + min),
                gender: gender[Math.floor(Math.random() * gender.length)],
                occupation: faker.name.title(),
                nsfw: faker.random.boolean(),
                profile_picture: faker.internet.avatar(),
                main_language: 'English',
                other_languages: 'Spanish',
                views: Math.floor(Math.random() * Math.floor(50000)),
                saves: Math.floor(Math.random() * Math.floor(35000)),
                last_transaction_on: faker.date.past(),
                number_of_transactions: Math.floor(Math.random() * Math.floor(200)),
                followers: _.times(Math.floor(Math.random() * (3) + 1), function (n) {
                    return {
                        media: media[Math.floor(Math.random() * media.length)],
                        account_age: Math.floor(Math.random() * (6 - 1) + 1) + ' year(s)',
                        url: faker.internet.url(),
                        verified: false,
                        experience: faker.lorem.paragraphs(),
                        numeralia: _.times(3, function (n) {
                            return {
                                tag: numeralia[Math.floor(Math.random() * numeralia.length)],
                                value: Math.floor(Math.random() * Math.floor(1000000))
                            }
                        })
                    }
                }),
                tags: _.times(3, function (n) {
                    return {
                        tag: tags[Math.floor(Math.random() * tags.length)]
                    }
                }),
                packages: _.times(Math.floor(Math.random() * (3) + 1), function (n) {
                    return {
                        price: Math.floor(Math.random() * (max - min) + min),
                        package_type: package_types[Math.floor(Math.random() * package_types.length)],
                        description: faker.lorem.sentence(),
                        delivery_time: '2 weeks'
                    }
                })
            }
        })
    }
}