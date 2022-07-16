﻿namespace Domovoy.Models;

public class Message
{
    public int Id { get; set; }

    public string Text { get; set; }
    public DateTime SentAt { get; set; }

    public int AuthorId { get; set; }
    public ApplicationUser Author { get; set; }
}