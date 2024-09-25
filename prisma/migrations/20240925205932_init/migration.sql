BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [username] NVARCHAR(50) NOT NULL,
    [password] NVARCHAR(255) NOT NULL,
    [firstname] NVARCHAR(50),
    [lastname] NVARCHAR(50),
    [phone] NVARCHAR(20),
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[PageCount] (
    [id] INT NOT NULL IDENTITY(1,1),
    [count] INT NOT NULL CONSTRAINT [PageCount_count_df] DEFAULT 0,
    [userId] INT NOT NULL,
    [createdAt] DATETIME NOT NULL CONSTRAINT [PageCount_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PageCount_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[PageCount] ADD CONSTRAINT [PageCount_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
