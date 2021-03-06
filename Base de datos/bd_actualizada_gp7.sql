USE [master]
GO
/****** Object:  Database [bolsa_empleos]    Script Date: 5/29/2020 7:15:37 PM ******/
CREATE DATABASE [bolsa_empleos]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bolsa_empleos', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\bolsa_empleos.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bolsa_empleos_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\bolsa_empleos_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [bolsa_empleos] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bolsa_empleos].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bolsa_empleos] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bolsa_empleos] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bolsa_empleos] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bolsa_empleos] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bolsa_empleos] SET ARITHABORT OFF 
GO
ALTER DATABASE [bolsa_empleos] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bolsa_empleos] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bolsa_empleos] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bolsa_empleos] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bolsa_empleos] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bolsa_empleos] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bolsa_empleos] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bolsa_empleos] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bolsa_empleos] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bolsa_empleos] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bolsa_empleos] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bolsa_empleos] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bolsa_empleos] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bolsa_empleos] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bolsa_empleos] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bolsa_empleos] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bolsa_empleos] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bolsa_empleos] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [bolsa_empleos] SET  MULTI_USER 
GO
ALTER DATABASE [bolsa_empleos] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bolsa_empleos] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bolsa_empleos] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bolsa_empleos] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [bolsa_empleos] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bolsa_empleos] SET QUERY_STORE = OFF
GO
USE [bolsa_empleos]
GO
/****** Object:  Table [dbo].[category]    Script Date: 5/29/2020 7:15:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[category](
	[category_id] [int] IDENTITY(1,1) NOT NULL,
	[category_name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED 
(
	[category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_posting]    Script Date: 5/29/2020 7:15:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_posting](
	[job_posting_id] [int] IDENTITY(1,1) NOT NULL,
	[category_id] [int] NOT NULL,
	[job_type] [int] NOT NULL,
	[company] [varchar](50) NOT NULL,
	[logo] [image] NULL,
	[url] [varchar](50) NULL,
	[position] [varchar](50) NOT NULL,
	[location] [varchar](50) NOT NULL,
	[description] [varchar](50) NOT NULL,
	[creation_date] [datetime] NOT NULL,
	[personal_id] [int] NOT NULL,
 CONSTRAINT [PK_job_posting] PRIMARY KEY CLUSTERED 
(
	[job_posting_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job_type]    Script Date: 5/29/2020 7:15:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_type](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_job_type] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 5/29/2020 7:15:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[personal_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[user_id] [int] NOT NULL,
 CONSTRAINT [PK_user] PRIMARY KEY CLUSTERED 
(
	[personal_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_types]    Script Date: 5/29/2020 7:15:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_types](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[user_type] [varchar](50) NOT NULL,
 CONSTRAINT [PK_user_types] PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[job_type] ON 

INSERT [dbo].[job_type] ([id], [name]) VALUES (1, N'Full Time')
INSERT [dbo].[job_type] ([id], [name]) VALUES (2, N'Part Time')
INSERT [dbo].[job_type] ([id], [name]) VALUES (3, N'Freelance')
SET IDENTITY_INSERT [dbo].[job_type] OFF
SET IDENTITY_INSERT [dbo].[user_types] ON 

INSERT [dbo].[user_types] ([user_id], [user_type]) VALUES (1, N'poster')
INSERT [dbo].[user_types] ([user_id], [user_type]) VALUES (2, N'usuario')
INSERT [dbo].[user_types] ([user_id], [user_type]) VALUES (3, N'administrador')
SET IDENTITY_INSERT [dbo].[user_types] OFF
ALTER TABLE [dbo].[job_posting]  WITH CHECK ADD  CONSTRAINT [FK_job_posting_category] FOREIGN KEY([category_id])
REFERENCES [dbo].[category] ([category_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[job_posting] CHECK CONSTRAINT [FK_job_posting_category]
GO
ALTER TABLE [dbo].[job_posting]  WITH CHECK ADD  CONSTRAINT [FK_job_posting_job_type] FOREIGN KEY([job_type])
REFERENCES [dbo].[job_type] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[job_posting] CHECK CONSTRAINT [FK_job_posting_job_type]
GO
ALTER TABLE [dbo].[job_posting]  WITH CHECK ADD  CONSTRAINT [FK_job_posting_user] FOREIGN KEY([personal_id])
REFERENCES [dbo].[user] ([personal_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[job_posting] CHECK CONSTRAINT [FK_job_posting_user]
GO
ALTER TABLE [dbo].[user]  WITH CHECK ADD  CONSTRAINT [FK_user_user_types] FOREIGN KEY([user_id])
REFERENCES [dbo].[user_types] ([user_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[user] CHECK CONSTRAINT [FK_user_user_types]
GO
USE [master]
GO
ALTER DATABASE [bolsa_empleos] SET  READ_WRITE 
GO
