﻿using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Domovoy.Models;

public class ApplicationUser : IdentityUser<int>
{
    [Required]
    public ApplicationUserType Type { get; set; }
    
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string? Patronymic { get; set; }
    
    /// <summary>
    /// If Tenant
    /// Apartments where user living
    /// </summary>
    public List<Apartment> Apartments { get; set; }
    /// <summary>
    /// If Tenant
    /// Apartments that user owns
    /// </summary>
    public List<Apartment> OwndedApartments { get; set; }
    /// <summary>
    /// If Tenant
    /// </summary>
    public Apartment? MainApartment { get; set; }
    
    public List<ApartmentRequest> ApartmentRequests { get; set; }

    public List<Apartment> Cart { get; set; }

    /// <summary>
    /// If ConstructionCompanyAdmin
    /// </summary>
    public ConstructionCompany? ConstructionCompany { get; set; }

    public List<Chat> Chats { get; set; }
    public List<Chat> AdminChats { get; set; }
    
    public List<UserService> UserServicesPrivided { get; set; }
    public List<ApartmentService> ApartmentServicesPrivided { get; set; }
    public List<InformerService> InformerServicesPrivided { get; set; }
}

public enum ApplicationUserType
{
    Tenant,
    ConstructionCompanyAdmin,
    ServiceProvider,
    Agent
}

public class ApplicationUserViewModel {
    public int Id { get; set; }
    public string UserName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string? Patronymic { get; set; }
    public string Email { get; set; }
    [Required]
    public ApplicationUserType Type { get; set; }
}