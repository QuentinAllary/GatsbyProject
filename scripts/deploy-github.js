const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'master',
        repo: 'https://github.com/QuentinAllary/GatsbyProject.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
);