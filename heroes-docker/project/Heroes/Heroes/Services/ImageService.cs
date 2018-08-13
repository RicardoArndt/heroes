using Heroes.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace Heroes.Services
{
    public class ImageService : IImageService
    {
        private string dir = Directory.GetParent(Directory.GetCurrentDirectory()).ToString();

        public void SendImage(string image, string imageId)
        {
            image = image.Replace(":", "").Replace(";", "").Replace(",", "");

            byte[] imageBytes = Convert.FromBase64String(image);

            File.WriteAllBytes(dir + @"\Images\" + imageId, imageBytes);
        }

        public string ReadImage(string imageId)
        {
            if (!string.IsNullOrEmpty(imageId))
            {
                byte[] reader = File.ReadAllBytes(dir + @"\Images\" + imageId);

                var convert = Convert.ToBase64String(reader);

                string pattern = @"(dataimage/jpegbase64)";
                string replace = "data:image/jpeg;base64,";
                var r = Regex.Replace(convert, pattern, replace);

                return r;
            }

            return null;
        }

        public void DeleteImage(string imageId)
        {
            if (!string.IsNullOrEmpty(imageId))
            {
                File.Delete(dir + @"\Images\" + imageId);
            }
        }
    }
}
