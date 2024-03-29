﻿namespace Domovoy.Models;

public class ConstructionCompany
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<ApplicationUser> Employees { get; set; }
    public List<ResidentialComplex> ResidentialComplexes { get; set; }
}


public class ConstructionCompanyViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class ConstructionCompanyDetails
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<ApplicationUserViewModel> Employees { get; set; }
    public List<ResidentialComplexDetails> ResidentialComplexes { get; set; }
}