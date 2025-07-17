switch(process.env.APP_NAME){
    case 'web1':
        console.log("build web1")
        break;
    case 'web2':
        console.log("build web2")
        break;
    default:
        console.error('APP_NAME environment variable is not set or invalid.');
        process.exit(1);
}