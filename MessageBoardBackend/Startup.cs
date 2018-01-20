﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;



namespace MessageBoardBackend
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<ApiContext>(opt =>
                opt.UseInMemoryDatabase());

            services.AddCors(options => options.AddPolicy("Cors", 
                builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }));
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            });


            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
           // app.UseAuthentication();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseDeveloperExceptionPage();


            app.UseAuthentication();

            app.UseCors("Cors");
            app.UseMvc();
            SeedData(app.ApplicationServices.GetService<ApiContext>());
        }
        public void SeedData(ApiContext context) {
            context.Messages.Add(new Models.Message
                {
                    Owner = "John",
                    Text = "hello"
                });
            context.Messages.Add(new Models.Message
            {
                Owner = "Tim",
                Text = "Hey man!"
            });
            context.Messages.Add(new Models.Message
            {
                Owner = "Andrew",
                Text = "Not again"
            });
            context.Users.Add(new Models.User
            {
                email = "a",
                firstName = "Tim",
                password = "a"
            });
            context.SaveChanges();
        }
    }
}
