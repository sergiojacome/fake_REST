module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    var gender = ['male', 'female'];
    var media = ['Facebook', 'Twitter', 'Instagram', 'Pinterest', 'Snapchat', 'Blog', 'YouTube'];
    var max = 45;
    var min = 18;
    return {
        people: _.times(100, function (n) {
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
                description: faker.lorem.paragraphs(),
                profile: faker.lorem.word(),
                country: 'United States of America',
                city: faker.address.city(),
                state: faker.address.state(),
                zip_code: faker.address.zipCode(),
                age: Math.floor(Math.random() * (max - min) + min),
                gender: gender[Math.floor(Math.random() * gender.length)],
                occupation: faker.name.title,
                nsfw: faker.random.boolean,
                profile_picture: faker.internet.avatar,
                main_language: 'English',
                other_languages: 'Spanish',
                views: Math.floor(Math.random() * Math.floor(50000)),
                saves: Math.floor(Math.random() * Math.floor(35000)),
                last_transaction_on: faker.date.past(),
                number_of_transactions: Math.floor(Math.random() * Math.floor(200)),
                followers: _.times(3, function (n) {
                    return {
                        item: [
                            {
                                media: media[Math.floor(Math.random() * media.length)],
                                followers: Math.floor(Math.random() * Math.floor(3500)),
                                visits_per_month: Math.floor(Math.random() * Math.floor(7500)),
                                account_age: Math.floor(Math.random() * (6 - 1) + 1) + ' year(s)',
                                url: faker.internet.url(),
                                verified: false,
                                experience: faker.lorem.paragraphs(),
                            }
                        ]
                    }
                })
            }
        })
    }
}