const { DataTypes } = require('sequelize');
const sequelize = require("../data/db");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverImg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profileImg: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const Post = sequelize.define("post", {
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Comment = sequelize.define("comment", {
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Story = sequelize.define("story", {
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Likes = sequelize.define("likes", {
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Relationship = sequelize.define("relationship", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

User.hasMany(Post, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Post.belongsTo(User);

User.hasMany(Comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Comment.belongsTo(User);

Post.hasMany(Comment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Comment.belongsTo(Post);

User.hasMany(Story, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Story.belongsTo(User);

User.hasMany(Story, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Story.belongsTo(User);

User.hasMany(Likes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Post.hasMany(Likes, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });


//follow_Relation
User.hasMany(Relationship, {
    foreignKey: {
        name: 'followerUserId'
    }
});
User.hasMany(Relationship, {
    foreignKey: {
        name: 'followedUserId'
    }
});


module.exports = {
    User,
    Post,
    Comment,
    Story,
    Likes,
    Relationship
};